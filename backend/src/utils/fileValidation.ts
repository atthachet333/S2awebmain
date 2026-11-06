/**
 * การตรวจสอบไฟล์แนบจากแบบฟอร์มติดต่อ (EP24)
 * - รองรับเฉพาะ PDF / JPG / JPEG / PNG
 * - ตรวจนามสกุล + ลายเซ็นไฟล์ (magic bytes) ให้ตรงกัน ไม่เชื่อนามสกุลอย่างเดียว
 * - จำกัดขนาดหลัง decode จริง และปฏิเสธไฟล์ว่าง / Base64 ไม่ถูกต้อง
 * - ทำความสะอาดชื่อไฟล์ (ตัด path, อักขระควบคุม, อักขระต้องห้าม)
 * ไฟล์ไม่ถูกบันทึกลงดิสก์ — ใช้แนบอีเมลเท่านั้น
 * หมายเหตุ: ยังไม่มีระบบสแกนมัลแวร์ (ดูรายงาน EP24)
 */

export const MAX_FILE_BYTES = 10 * 1024 * 1024;
/** ความยาวสูงสุดของ Base64 สำหรับไฟล์ 10 MB */
export const MAX_BASE64_LENGTH = Math.ceil(MAX_FILE_BYTES / 3) * 4;
export const MAX_FILE_NAME_LENGTH = 120;

export type AllowedFileKind = 'pdf' | 'jpeg' | 'png';

const EXTENSION_KIND: Record<string, AllowedFileKind> = {
  pdf: 'pdf',
  jpg: 'jpeg',
  jpeg: 'jpeg',
  png: 'png',
};

export const CONTENT_TYPE: Record<AllowedFileKind, string> = {
  pdf: 'application/pdf',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

const BASE64_PATTERN = /^[A-Za-z0-9+/]+={0,2}$/;

/** ตัด path / อักขระควบคุม / อักขระที่ไม่ปลอดภัย และจำกัดความยาว — คืนค่า null ถ้าใช้ไม่ได้ */
export function sanitizeFileName(raw: string): string | null {
  // เอาเฉพาะชื่อไฟล์ (กัน path traversal เช่น ../../etc/passwd หรือ C:\...)
  const base = raw.split(/[\\/]/).pop() ?? '';
  const cleaned = base
    .normalize('NFC')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/[<>:"|?*;`$&]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^\.+/, '');
  if (!cleaned) return null;

  const dot = cleaned.lastIndexOf('.');
  if (dot <= 0) return null;
  const ext = cleaned.slice(dot + 1).toLowerCase();
  if (!EXTENSION_KIND[ext]) return null;

  const stem = cleaned.slice(0, dot).slice(0, MAX_FILE_NAME_LENGTH - ext.length - 1).trim() || 'document';
  return `${stem}.${ext}`;
}

export function kindFromFileName(fileName: string): AllowedFileKind | null {
  const ext = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
  return EXTENSION_KIND[ext] ?? null;
}

/** ตรวจลายเซ็นไฟล์จากไบต์แรก */
export function detectKind(bytes: Buffer): AllowedFileKind | null {
  if (bytes.length >= 5 && bytes.subarray(0, 5).toString('latin1') === '%PDF-') return 'pdf';
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpeg';
  if (
    bytes.length >= 8 &&
    bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) {
    return 'png';
  }
  return null;
}

export type FileCheck =
  | { ok: true; fileName: string; kind: AllowedFileKind; base64: string; size: number }
  | { ok: false; reason: 'name' | 'encoding' | 'empty' | 'size' | 'type' };

/** ตรวจไฟล์แนบครบทุกขั้น (ชื่อ, Base64, ขนาดจริง, ลายเซ็นตรงกับนามสกุล) */
export function validateAttachment(rawName: string, rawBase64: string): FileCheck {
  const fileName = sanitizeFileName(rawName);
  if (!fileName) return { ok: false, reason: 'name' };

  // รองรับกรณีส่งมาเป็น data URL โดยไม่ตั้งใจ
  const base64 = rawBase64.replace(/^data:[^,]*,/, '').replace(/\s+/g, '');
  if (!base64) return { ok: false, reason: 'empty' };
  if (base64.length > MAX_BASE64_LENGTH) return { ok: false, reason: 'size' };
  if (base64.length % 4 !== 0 || !BASE64_PATTERN.test(base64)) return { ok: false, reason: 'encoding' };

  const bytes = Buffer.from(base64, 'base64');
  if (bytes.length === 0) return { ok: false, reason: 'empty' };
  if (bytes.length > MAX_FILE_BYTES) return { ok: false, reason: 'size' };

  const expected = kindFromFileName(fileName);
  const detected = detectKind(bytes);
  if (!expected || !detected || expected !== detected) return { ok: false, reason: 'type' };

  return { ok: true, fileName, kind: detected, base64, size: bytes.length };
}
