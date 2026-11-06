type ClassValue = string | number | null | false | undefined;

/**
 * Merge conditional class names into a single string.
 * Lightweight alternative to clsx to keep the bundle small.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}

export const companyContact = {
  email: 'office@s2aconsultant.com',
} as const;

export const siteConfig = {
  name: 'S2 Accounting Consultant',
  shortName: 'S2 Accounting Consultant',
  brandLine1: 'S2 Accounting',
  brandLine2: 'Consultant',
  logo: '/s2-logo-circle.png',
  description:
    'ที่ปรึกษาธุรกิจที่มีงานบัญชีและภาษีเป็นรากฐาน ช่วยเจ้าของธุรกิจและผู้บริหารเข้าใจตัวเลข ต้นทุน และกำไร เพื่อการตัดสินใจที่ดีขึ้น',
  url: 'https://www.s2aconsultant.com',
  phone: '064-924-5544',
  phones: [
    {
      label: 'โทรศัพท์ (Office)',
      number: '064-924-5544',
      href: 'tel:+66649245544',
      note: 'ติดต่อในเวลาทำการ',
    },
    {
      label: 'โทรศัพท์ (คุณผึ้ง)',
      number: '090-662-5464',
      href: 'tel:+66906625464',
    },
    {
      label: 'โทรศัพท์ (คุณวิน)',
      number: '063-869-3614',
      href: 'tel:+66638693614',
    },
  ],
  email: companyContact.email,
  lineOA: '@s2a.customer',
  lineUrl: 'https://line.me/R/ti/p/%40s2a.customer',
  address: '14/14 ซอยกรุงเทพ-นนท์ 21 ถ.กรุงเทพ-นนท์ แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800',
  workingHours: 'จันทร์ – เสาร์ 09.00 – 17.00 น.',
} as const;
