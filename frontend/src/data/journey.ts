/**
 * EP28 — Client Journey & Growth Path
 * เส้นทางนี้เป็น "แนวทาง" ไม่ใช่ขั้นตอนบังคับ: ลูกค้าเริ่มได้ทุกจุด เลือกเฉพาะบริการที่ต้องการ
 * อยู่ช่วงเดียวได้นาน ข้ามช่วง หรือปรับโครงสร้างย้อนกลับได้
 * ใช้ภาษาธุรกิจก่อนศัพท์บัญชี · เทคโนโลยี/ERP ปรากฏเฉพาะช่วงที่ธุรกิจซับซ้อนขึ้น · ไม่มี PDA BLISS ในช่วงต้น
 * services = slug จาก data/services.ts (ลิงก์ไปยัง anchor เดิมบนหน้า Services)
 */
export interface JourneyStage {
  id: string;
  /** สถานการณ์ของธุรกิจ (ภาษาธุรกิจ) */
  situation: string;
  /** เป้าหมายของช่วงนี้ */
  objective: string;
  /** สิ่งที่ธุรกิจมักต้องการในช่วงนี้ */
  needs: string;
  services: string[];
}

export const journeyStages: JourneyStage[] = [
  {
    id: 'stage-starting',
    situation: 'กำลังเริ่มธุรกิจ',
    objective: 'เริ่มต้นด้วยรากฐานที่ถูกต้องและเชื่อถือได้',
    needs: 'จดทะเบียน วางระบบเอกสารและบัญชี และเข้าใจภาระภาษีตั้งแต่วันแรก',
    services: ['company-registration', 'accounting-system', 'monthly-accounting', 'tax-filing'],
  },
  {
    id: 'stage-running',
    situation: 'ธุรกิจกำลังดำเนินงาน',
    objective: 'ให้งานบัญชี ภาษี และเงินเดือนเป็นระเบียบและเชื่อถือได้',
    needs: 'บัญชีรายเดือน ยื่นภาษี เงินเดือนและประกันสังคม และปิดงบอย่างสม่ำเสมอ',
    services: ['monthly-accounting', 'financial-statements', 'tax-filing', 'payroll'],
  },
  {
    id: 'stage-understanding',
    situation: 'อยากเข้าใจต้นทุนและกำไร',
    objective: 'จากการมีตัวเลข สู่การเข้าใจว่าตัวเลขหมายถึงอะไร',
    needs: 'รู้ว่าสินค้าหรือบริการไหนทำกำไรจริง ต้นทุนเพิ่มเพราะอะไร และ Margin เปลี่ยนตรงไหน',
    services: ['financial-analysis', 'cost-profitability-analysis', 'tax-planning'],
  },
  {
    id: 'stage-planning',
    situation: 'เริ่มต้องวางแผนล่วงหน้า',
    objective: 'ใช้ข้อมูลวางแผน แทนการตามแก้ปัญหา',
    needs: 'งบประมาณ ประมาณการ รายงานผู้บริหาร และการเตรียมความพร้อมก่อนขยายธุรกิจ',
    services: ['budgeting-forecasting', 'financial-analysis', 'cfo-advisory'],
  },
  {
    id: 'stage-complexity',
    situation: 'ธุรกิจเริ่มซับซ้อนขึ้น',
    objective: 'ให้ผู้บริหารยังเห็นภาพชัด แม้การดำเนินงานจะซับซ้อนขึ้น',
    needs: 'รายการมากขึ้น หลายสาขาหรือหลายแผนก คนและสต็อกมากขึ้น และต้องการรายงานที่ละเอียดขึ้น',
    services: ['cfo-advisory', 'cost-profitability-analysis', 'accounting-system', 'accounting-systems-erp-advisory'],
  },
  {
    id: 'stage-structure',
    situation: 'ต้องการโครงสร้างเพื่อก้าวต่อไป',
    objective: 'วางโครงสร้างให้พอรองรับก้าวต่อไปของธุรกิจ',
    needs: 'ข้อมูลผู้บริหารที่เป็นระบบ ปรับปรุงกระบวนการ และประเมินความพร้อมก่อนเลือกระบบหรือ ERP',
    services: ['cfo-advisory', 'accounting-systems-erp-advisory'],
  },
];

/** ความสัมพันธ์ที่ขยายได้ตามความต้องการ — ไม่จำเป็นต้องใช้บริการเพิ่ม */
export const continuityPath = ['งานบัญชีประจำ', 'การวิเคราะห์', 'การวางแผน', 'ที่ปรึกษา', 'ประเมินระบบเมื่อจำเป็น'];
