type ClassValue = string | number | null | false | undefined;

/**
 * Merge conditional class names into a single string.
 * Lightweight alternative to clsx to keep the bundle small.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}

export const siteConfig = {
  name: 'S2 Accounting & Finance Advisory',
  shortName: 'S2 Advisory',
  description:
    'บริการบัญชี ภาษี การเงิน และที่ปรึกษาธุรกิจระดับมืออาชีพ ช่วยเจ้าของธุรกิจและผู้บริหารตัดสินใจจากข้อมูลจริง',
  url: 'https://s2advisory.co.th',
  phone: '02-123-4567',
  mobile: '081-234-5678',
  email: 'contact@s2advisory.co.th',
  lineOA: '@s2advisory',
  address: 'อาคารสำนักงาน ชั้น 12 ถนนสาทรเหนือ แขวงสีลม เขตบางรัก กรุงเทพฯ 10500',
  workingHours: 'จันทร์ – ศุกร์ 09.00 – 18.00 น.',
} as const;
