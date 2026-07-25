import {
  ShoppingCart,
  Coffee,
  Briefcase,
  Factory,
  Home,
  Ship,
  Cpu,
  Users,
} from 'lucide-react';
import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    description: 'ร้านค้าออนไลน์และมาร์เก็ตเพลส ที่มีรายการจำนวนมากและหลายช่องทาง',
  },
  {
    icon: Coffee,
    name: 'ร้านอาหารและคาเฟ่',
    description: 'ธุรกิจอาหารและเครื่องดื่ม ที่ต้องคุมต้นทุนวัตถุดิบและสต๊อกอย่างใกล้ชิด',
  },
  {
    icon: Briefcase,
    name: 'ธุรกิจบริการ',
    description: 'ที่ปรึกษา เอเจนซี และธุรกิจบริการ ที่รายได้ผูกกับโครงการและทีมงาน',
  },
  {
    icon: Factory,
    name: 'โรงงานและการผลิต',
    description: 'ธุรกิจการผลิต ที่ต้องคำนวณต้นทุนสินค้าและบริหารสินค้าคงคลัง',
  },
  {
    icon: Home,
    name: 'อสังหาริมทรัพย์',
    description: 'ธุรกิจพัฒนาและบริหารอสังหาริมทรัพย์ ที่มีโครงสร้างการเงินซับซ้อน',
  },
  {
    icon: Ship,
    name: 'นำเข้าและส่งออก',
    description: 'ธุรกิจการค้าระหว่างประเทศ ที่มีเรื่องภาษี ศุลกากร และอัตราแลกเปลี่ยน',
  },
  {
    icon: Cpu,
    name: 'เทคโนโลยีและ Startup',
    description: 'ธุรกิจเทคโนโลยีที่เติบโตเร็ว ต้องการข้อมูลการเงินเพื่อระดมทุนและขยายตัว',
  },
  {
    icon: Users,
    name: 'ธุรกิจครอบครัว',
    description: 'กิจการครอบครัวที่ต้องการวางระบบและส่งต่อธุรกิจอย่างมั่นคง',
  },
];
