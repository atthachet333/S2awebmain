import { Users, CalendarClock, FileCheck2, Smile } from 'lucide-react';
import type { StatItem } from '@/types';

export const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'ลูกค้าที่ไว้วางใจ', icon: Users },
  { value: 10, suffix: '+', label: 'ปีของประสบการณ์', icon: CalendarClock },
  { value: 3000, suffix: '+', label: 'รายงานที่จัดส่ง', icon: FileCheck2 },
  { value: 98, suffix: '%', label: 'ความพึงพอใจลูกค้า', icon: Smile },
];
