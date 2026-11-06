/**
 * S2 × PDA BLISS — Technology & Systems Partnership
 *
 * ข้อเท็จจริงที่ยืนยันแล้ว:
 * - S2 Accounting Consultant และ PDA BLISS COMPANY LIMITED เป็นธุรกิจที่แยกจากกัน (ไม่ใช่นิติบุคคลเดียวกัน)
 * - ความสัมพันธ์ = พันธมิตรด้านเทคโนโลยีและระบบธุรกิจ (Technology & Systems Partner)
 *
 * ห้ามใช้: "our software division", "S2 technology company", "S2 owns PDA BLISS"
 * ห้ามเพิ่มสถิติ ลูกค้า ใบรับรอง รางวัล หรือ Case Study ของความร่วมมือที่ไม่มีหลักฐาน
 */

export const pdaBliss = {
  name: 'PDA BLISS',
  legalName: 'PDA BLISS COMPANY LIMITED',
  url: 'https://pdabliss.com',
  displayUrl: 'pdabliss.com',
  /** โลโก้จริงจากเจ้าของแบรนด์ — ห้ามวาดใหม่ ห้ามบิดสัดส่วน */
  logo: {
    /** สำหรับพื้นหลังสว่าง (พื้นขาวในไฟล์) */
    light: { src: '/images/partners/pda-bliss-logo-light.png', width: 560, height: 597 },
    /** สำหรับพื้นหลังมืด (โปร่งใส สีเงิน) */
    dark: { src: '/images/partners/pda-bliss-logo-dark.png', width: 560, height: 599 },
    /** Mark ขนาดเล็ก (สี่เหลี่ยมพื้นเขียวเข้ม) สำหรับหัวข้อ / มือถือ */
    mark: { src: '/images/partners/pda-bliss-mark.png', width: 180, height: 180 },
  },
} as const;

/** บทบาทในบริการที่ปรึกษาระบบบัญชีและ ERP */
export const erpRoles = {
  s2: [
    'กระบวนการทางบัญชี',
    'ผังบัญชี (Chart of Accounts)',
    'การควบคุมภายใน',
    'ข้อกำหนดด้านต้นทุน',
    'ข้อกำหนดด้านรายงาน',
    'ความพร้อมก่อนนำ ERP มาใช้',
    'ความต้องการทางธุรกิจ (Business Requirements)',
  ],
  pda: [
    'ให้คำปรึกษาด้านเทคโนโลยี',
    'ระบบซอฟต์แวร์',
    'ความสามารถด้าน ERP และ Workflow',
    'การเชื่อมต่อระบบ (Integration)',
    'การติดตั้งและพัฒนาระบบ ในกรณีที่เกี่ยวข้อง',
  ],
};
