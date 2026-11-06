import { Users, LayoutGrid, Layers, Languages } from 'lucide-react';
import type { StatItem } from '@/types';

/**
 * ตัวเลขที่แสดงบนเว็บไซต์ต้องเป็นข้อเท็จจริงที่ยืนยันได้เท่านั้น
 * - 100+ ลูกค้า: ยืนยันโดยเจ้าของธุรกิจ (นิติบุคคลและบุคคล)
 * - 12 บริการ: ตรงกับรายการใน src/data/services.ts
 * - 5 ด้าน: บัญชี · ภาษี · ต้นทุน · CFO · ERP (ตามบริการที่มีจริง)
 * - 3 ภาษา: TH / EN / ZH
 * ห้ามเพิ่มสถิติที่ไม่มีข้อมูลรองรับ (เช่น % ความพึงพอใจ หรือจำนวนรายงาน)
 */
export const stats: StatItem[] = [
  { value: 100, suffix: '+', label: 'ลูกค้าที่ดูแล', description: 'ทั้งนิติบุคคลและบุคคล', icon: Users },
  { value: 12, suffix: '', label: 'บริการมืออาชีพ', description: 'ครอบคลุมบัญชี ภาษี และที่ปรึกษาธุรกิจ', icon: LayoutGrid },
  { value: 5, suffix: '', label: 'ด้านความเชี่ยวชาญหลัก', description: 'บัญชี · ภาษี · ต้นทุน · CFO · ERP', icon: Layers },
  { value: 3, suffix: '', label: 'ภาษาที่รองรับ', description: 'ไทย · English · 中文', icon: Languages },
];
