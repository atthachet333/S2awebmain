import { CalendarCheck, Users, LayoutGrid, Languages } from 'lucide-react';
import type { StatItem } from '@/types';

/**
 * ตัวเลขที่แสดงบนเว็บไซต์ต้องเป็นข้อเท็จจริงที่ยืนยันได้เท่านั้น
 * - พ.ศ. 2562: ปีที่เริ่มให้บริการ (ยืนยันแล้ว · แสดงเป็นข้อความ ไม่ใช่ตัวนับ)
 * - 100+ ลูกค้า: จำนวนลูกค้าที่ให้บริการมาแล้วรวม (นิติบุคคลและบุคคล) ไม่ใช่ลูกค้าที่ใช้บริการอยู่ทั้งหมด (EP34)
 * - 12 บริการ: ตรงกับรายการใน src/data/services.ts
 * - 3 ภาษา: TH / EN / ZH
 * ห้ามเพิ่มสถิติที่ไม่มีข้อมูลรองรับ (เช่น % ความพึงพอใจ หรือจำนวนรายงาน)
 */
export const stats: StatItem[] = [
  { value: 2562, display: 'พ.ศ. 2562', suffix: '', label: 'ปีที่เริ่มให้บริการ', description: 'บัญชี ภาษี และที่ปรึกษาธุรกิจ', icon: CalendarCheck },
  { value: 100, suffix: '+', label: 'ลูกค้าที่ให้บริการมาแล้ว', description: 'ทั้งนิติบุคคลและบุคคล', icon: Users },
  { value: 12, suffix: '', label: 'บริการ', description: 'ใน 3 กลุ่ม: บัญชี ที่ปรึกษา และระบบ', icon: LayoutGrid },
  { value: 3, suffix: '', label: 'ภาษาที่รองรับ', description: 'ไทย · English · 中文', icon: Languages },
];
