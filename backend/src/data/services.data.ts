import type { ServiceDto } from '../types';

/**
 * Demo data source. โครงสร้างพร้อมแทนที่ด้วย Database query ภายหลัง
 * (เช่น services.service.ts เรียก repository/ORM แทน array นี้)
 */
export const servicesData: ServiceDto[] = [
  {
    slug: 'monthly-accounting',
    icon: 'BookOpenCheck',
    title: 'รับทำบัญชีรายเดือน',
    short: 'บันทึกบัญชีครบวงจร ปิดรอบตรงเวลา พร้อมรายงานที่ผู้บริหารเข้าใจง่ายทุกเดือน',
    category: 'accounting',
  },
  {
    slug: 'accounting-system',
    icon: 'Settings2',
    title: 'วางระบบบัญชี',
    short: 'ออกแบบผังบัญชีและกระบวนการทำงาน ให้ข้อมูลไหลลื่นตั้งแต่หน้าร้านถึงงบการเงิน',
    category: 'setup',
  },
  {
    slug: 'financial-statements',
    icon: 'FileSpreadsheet',
    title: 'ปิดงบการเงิน',
    short: 'จัดทำและตรวจสอบงบการเงินประจำปี พร้อมยื่นต่อหน่วยงานอย่างถูกต้องครบถ้วน',
    category: 'accounting',
  },
  {
    slug: 'tax-filing',
    icon: 'Calculator',
    title: 'ยื่นภาษี',
    short: 'ดูแลการยื่นภาษีทุกประเภทให้ถูกต้อง ตรงเวลา ลดความเสี่ยงถูกตรวจสอบ',
    category: 'tax',
  },
  {
    slug: 'tax-planning',
    icon: 'Landmark',
    title: 'วางแผนภาษี',
    short: 'วางแผนภาษีอย่างถูกกฎหมาย ใช้สิทธิประโยชน์เต็มที่ เพื่อประหยัดต้นทุนอย่างยั่งยืน',
    category: 'tax',
  },
  {
    slug: 'cfo-advisory',
    icon: 'TrendingUp',
    title: 'CFO Advisory',
    short: 'ที่ปรึกษาการเงินระดับผู้บริหาร ช่วยวางกลยุทธ์และตัดสินใจจากข้อมูลจริง',
    category: 'advisory',
  },
  {
    slug: 'financial-analysis',
    icon: 'LineChart',
    title: 'วิเคราะห์การเงิน',
    short: 'อ่านตัวเลขให้เป็นข้อมูลเชิงลึก ชี้จุดแข็ง จุดรั่วไหล และโอกาสเติบโต',
    category: 'finance',
  },
  {
    slug: 'cash-flow',
    icon: 'Wallet',
    title: 'บริหารกระแสเงินสด',
    short: 'มองเห็นเงินเข้า–ออกล่วงหน้า วางแผนสภาพคล่องไม่ให้สะดุดกลางทาง',
    category: 'finance',
  },
  {
    slug: 'budgeting-forecasting',
    icon: 'PiggyBank',
    title: 'งบประมาณและประมาณการ',
    short: 'วางงบประมาณและประมาณการล่วงหน้า ให้ทั้งองค์กรเดินไปในทิศทางเดียวกัน',
    category: 'finance',
  },
  {
    slug: 'payroll',
    icon: 'Users2',
    title: 'Payroll และประกันสังคม',
    short: 'จัดการเงินเดือน ภาษี และประกันสังคมอย่างถูกต้อง เป็นความลับ และตรงเวลา',
    category: 'accounting',
  },
  {
    slug: 'company-registration',
    icon: 'Building2',
    title: 'จดทะเบียนบริษัท',
    short: 'ดูแลการจดทะเบียนและเอกสารธุรกิจครบวงจร เริ่มต้นธุรกิจได้อย่างถูกต้อง',
    category: 'setup',
  },
];
