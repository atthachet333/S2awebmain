/**
 * API Client กลาง — จุดเดียวที่ Frontend ติดต่อ Backend
 * ห้ามเรียก fetch() กระจายตาม component ให้เรียกผ่านฟังก์ชันในไฟล์นี้เท่านั้น
 */

/**
 * ค่าเริ่มต้นเป็น same-origin ('/api/...') — Next.js rewrite ใน next.config.mjs ส่งต่อไปยัง Backend
 * ภายในเครื่อง (BACKEND_INTERNAL_URL) จึงไม่ต้องเปิด Backend สู่สาธารณะและไม่ต้องใช้ CORS
 * กำหนด NEXT_PUBLIC_API_URL เฉพาะเมื่อ Backend มี hostname สาธารณะแยกต่างหาก
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, '') || '';

const DEFAULT_TIMEOUT = 10_000;

export class ApiRequestError extends Error {
  public readonly status: number;
  public readonly fieldErrors?: Record<string, string[]>;

  constructor(message: string, status: number, fieldErrors?: Record<string, string[]>) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
  timeout?: number;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, timeout = DEFAULT_TIMEOUT, headers, ...rest } = options;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const isJson = res.headers.get('content-type')?.includes('application/json');
    const payload = isJson ? await res.json() : null;

    if (!res.ok) {
      const message =
        (payload && (payload.message as string)) ||
        'ไม่สามารถเชื่อมต่อกับระบบได้ กรุณาลองใหม่อีกครั้ง';
      throw new ApiRequestError(message, res.status, payload?.errors);
    }

    return payload as T;
  } catch (err) {
    if (err instanceof ApiRequestError) throw err;
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new ApiRequestError('การเชื่อมต่อใช้เวลานานเกินไป กรุณาลองใหม่อีกครั้ง', 408);
    }
    throw new ApiRequestError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่อ', 0);
  } finally {
    clearTimeout(timer);
  }
}

/* ---------- Types ---------- */

export interface ApiService {
  slug: string;
  icon: string;
  title: string;
  short: string;
  category: string;
}

export interface ApiPackage {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceNote: string;
  audience: string;
  highlighted?: boolean;
  features: string[];
  documents: string;
  meetings: string;
  reports: string;
  support: string;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
}

export interface ContactPayload {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  businessType: string;
  interestedServices: string[];
  message?: string;
  fileName?: string; // ชื่อไฟล์แนบ (.pdf/.jpg/.jpeg/.png) — Backend ตรวจซ้ำ
  fileBase64?: string; // เนื้อไฟล์แบบ Base64 (ไม่เกิน 10 MB)
  consent: true;
}

export interface ConsultationPayload {
  contactName: string;
  phone: string;
  email: string;
  preferredDate?: string;
  preferredChannel?: 'phone' | 'online' | 'onsite';
  topic?: string;
  consent: true;
}

interface MutationResponse {
  success: boolean;
  message: string;
  data?: { id: string };
}

/* ---------- Endpoints ---------- */

export const api = {
  checkHealth: () => request<HealthResponse>('/api/health'),

  getServices: async (): Promise<ApiService[]> => {
    const res = await request<{ success: boolean; data: ApiService[] }>('/api/services');
    return res.data;
  },

  getPackages: async (): Promise<ApiPackage[]> => {
    const res = await request<{ success: boolean; data: ApiPackage[] }>('/api/packages');
    return res.data;
  },

  submitContactForm: (payload: ContactPayload, options: { timeout?: number } = {}) =>
    request<MutationResponse>('/api/contact', { method: 'POST', body: payload, ...options }),

  submitConsultationForm: (payload: ConsultationPayload) =>
    request<MutationResponse>('/api/consultations', { method: 'POST', body: payload }),
};
