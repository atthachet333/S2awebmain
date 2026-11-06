import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  problem: string;
  deliverables: string[];
  process: string[];
  documents: string[];
  duration: string;
  suitableFor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  /** คำอธิบายสั้นใต้ตัวเลข (ต้องเป็นข้อเท็จจริงที่ตรวจสอบได้) */
  description?: string;
  icon: LucideIcon;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

/** ตัวอย่างโจทย์ธุรกิจ (Example Scenario) — ไม่ใช่ลูกค้าจริงหรือคำรับรองจากลูกค้า */
export interface ExampleScenario {
  icon: LucideIcon;
  businessType: string;
  challenge: string;
  approach: string;
  services: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** รูปแบบบริการบนหน้า Pricing (EP22) — ราคาที่แสดงเป็น "ราคาเริ่มต้น" สำหรับขอบเขตมาตรฐานเท่านั้น */
export interface PricingPathway {
  slug: 'premium' | 'enterprise';
  /** ป้ายกำกับเล็กเหนือชื่อ */
  label: string;
  name: string;
  /** ราคาเริ่มต้นต่อเดือน (บาท) */
  price: number;
  positioning: string;
  /** EP28: เหมาะกับธุรกิจในช่วงใดของเส้นทางการเติบโต */
  suitedFor: string;
  scope: string[];
  /** สิ่งที่ "ไม่รวม" ในราคาเริ่มต้น (ประเมินแยก) */
  excluded?: string[];
  note: string;
  cta: string;
  /** intent ที่ส่งไปยังฟอร์มติดต่อ (?service=) */
  intent: 'premium' | 'enterprise' | 'custom';
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  featuredImage?: string;
  imageAlt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
  keywords?: string[];
  relatedSlugs?: string[];
  ctaTitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface TeamMember {
  /** ชื่อการ์ด — ใช้ชื่อทีมหรือชื่อตำแหน่ง (ห้ามสร้างบุคคลสมมติ) */
  name: string;
  role: string;
  credentials: string;
  bio: string;
  /** ป้ายกำกับบนหัวการ์ด */
  initials: string;
  /** ป้ายประเภทบทบาทเหนือชื่อ (เช่น ทีมงานหลัก / บทบาทผู้บริหาร) */
  kicker?: string;
  /** ขอบเขตงาน/ความสามารถ (แสดงเป็นป้าย) */
  capabilities?: string[];
  /** ถ้ามี จะแสดงไอคอนแทนโลโก้ S2 บนหัวการ์ด (การ์ดตามบทบาท ไม่มีรูปบุคคล) */
  icon?: LucideIcon;
}
