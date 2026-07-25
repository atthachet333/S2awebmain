import {
  Search,
  ClipboardCheck,
  Settings,
  PlayCircle,
  BarChart3,
  MessagesSquare,
} from 'lucide-react';
import type { ProcessStep } from '@/types';

export const workProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'วิเคราะห์ธุรกิจ',
    description: 'ทำความเข้าใจโมเดลธุรกิจ เป้าหมาย และความท้าทายของคุณอย่างละเอียด',
    icon: Search,
  },
  {
    step: '02',
    title: 'ตรวจสอบข้อมูล',
    description: 'ตรวจสอบเอกสารและสถานะบัญชีปัจจุบัน เพื่อประเมินจุดที่ต้องปรับปรุง',
    icon: ClipboardCheck,
  },
  {
    step: '03',
    title: 'วางระบบ',
    description: 'ออกแบบผังบัญชีและกระบวนการทำงานที่เหมาะกับธุรกิจของคุณโดยเฉพาะ',
    icon: Settings,
  },
  {
    step: '04',
    title: 'เริ่มดำเนินงาน',
    description: 'ลงมือทำบัญชีและดูแลภาษีตามระบบที่วางไว้ อย่างต่อเนื่องและตรงเวลา',
    icon: PlayCircle,
  },
  {
    step: '05',
    title: 'จัดทำรายงาน',
    description: 'ส่งมอบรายงานการเงินที่เข้าใจง่าย พร้อมข้อมูลเชิงลึกทุกเดือน',
    icon: BarChart3,
  },
  {
    step: '06',
    title: 'ให้คำปรึกษาต่อเนื่อง',
    description: 'ประชุมทบทวนผลและให้คำแนะนำ เพื่อสนับสนุนการตัดสินใจของคุณ',
    icon: MessagesSquare,
  },
];
