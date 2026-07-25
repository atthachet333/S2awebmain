import {
  BookOpenCheck,
  Settings2,
  FileSpreadsheet,
  Calculator,
  Landmark,
  LineChart,
  PiggyBank,
  Wallet,
  TrendingUp,
  Users2,
  Building2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/** แปลงชื่อ icon (string จาก Backend) เป็น Lucide component */
export const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  Settings2,
  FileSpreadsheet,
  Calculator,
  Landmark,
  LineChart,
  PiggyBank,
  Wallet,
  TrendingUp,
  Users2,
  Building2,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
