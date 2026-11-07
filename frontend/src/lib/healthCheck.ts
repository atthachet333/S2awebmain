/**
 * EP35 — แบบประเมินสุขภาพธุรกิจเบื้องต้น (Business Health Check)
 * ตรรกะล้วน ไม่ขึ้นกับภาษา/React — ทดสอบได้ด้วย node --test
 * - ไม่ใช่การวินิจฉัย ไม่ใช่การตรวจสอบบัญชี ไม่ใช่คำแนะนำด้านบัญชี/ภาษี และไม่ใช่การรับประกัน
 * - ไม่มี "คะแนนสุขภาพ" รวม — ให้ผลเป็นสถานะรายด้านเท่านั้น
 * - คำตอบอยู่ในเบราว์เซอร์ ไม่ส่งหรือจัดเก็บ
 */
export type DimensionId = 'foundation' | 'cost' | 'visibility' | 'planning' | 'management-info' | 'complexity';
export type AnswerValue = 'yes' | 'partly' | 'no';
export type DimensionState = 'stable' | 'review' | 'attention';

export interface HealthQuestion {
  id: string;
  dimension: DimensionId;
  text: string;
  /** true = ตอบ "ใช่" หมายถึงความซับซ้อนเพิ่มขึ้น (ให้คะแนนกลับด้าน) */
  reverse?: boolean;
}

export interface HealthDimension {
  id: DimensionId;
  title: string;
  /** แสดงเมื่อสถานะ "มั่นคง" */
  stableText: string;
  /** แสดงเมื่อสถานะ "ควรทบทวน" หรือ "ควรให้ความสนใจ" */
  focusText: string;
  /** slug บริการเดิมที่เกี่ยวข้อง (ไม่ใช่บริการใหม่) */
  services: string[];
}

export const healthDimensions: HealthDimension[] = [
  {
    id: 'foundation',
    title: 'รากฐานงานบัญชี',
    stableText: 'งานบัญชีและเอกสารดูเป็นปัจจุบันและเป็นระบบ ซึ่งเป็นฐานที่ดีสำหรับการใช้ข้อมูลต่อ',
    focusText: 'งานบัญชีที่ค้างหรือเอกสารที่ไม่เป็นระบบ ทำให้ข้อมูลที่ผู้บริหารเห็นอาจไม่ทันหรือไม่ครบ',
    services: ['monthly-accounting', 'accounting-system'],
  },
  {
    id: 'cost',
    title: 'ต้นทุนและกำไร',
    stableText: 'คุณเห็นอัตรากำไรและแหล่งกำไรค่อนข้างชัด',
    focusText: 'การเห็น Margin และกำไรแยกตามสินค้า บริการ สาขา หรือโครงการ ช่วยให้รู้ว่ากำไรมาจากส่วนใด',
    services: ['cost-profitability-analysis'],
  },
  {
    id: 'visibility',
    title: 'ภาพรวมการเงิน',
    stableText: 'ผู้บริหารเข้าใจการเปลี่ยนแปลงของตัวเลขและสถานะเงินสดค่อนข้างดี',
    focusText: 'การเข้าใจว่าตัวเลขเปลี่ยนเพราะอะไร และเห็นเงินสดชัดพอ ช่วยให้ตัดสินใจได้มั่นใจขึ้น',
    services: ['financial-analysis', 'cfo-advisory'],
  },
  {
    id: 'planning',
    title: 'การวางแผน',
    stableText: 'ธุรกิจมีแผนและติดตามผลเทียบกับแผนอยู่แล้ว',
    focusText: 'งบประมาณและการเทียบผลจริงกับแผน ช่วยให้ธุรกิจเตรียมรับล่วงหน้าแทนการตามแก้ภายหลัง',
    services: ['budgeting-forecasting'],
  },
  {
    id: 'management-info',
    title: 'ข้อมูลเพื่อการบริหาร',
    stableText: 'ตัวเลขสำคัญอยู่ในที่ที่ผู้บริหารหาเจอและใช้งานได้',
    focusText: 'เมื่อตัวเลขสำคัญกระจายหลายที่ การจัดข้อมูลเพื่อการบริหารให้อยู่ในรูปแบบเดียวกันช่วยให้ติดตามง่ายขึ้น',
    services: ['financial-analysis', 'cfo-advisory'],
  },
  {
    id: 'complexity',
    title: 'ความซับซ้อนของธุรกิจ',
    stableText: 'ความซับซ้อนของงานยังอยู่ในระดับที่กระบวนการปัจจุบันรองรับได้',
    focusText: 'เมื่อธุรกิจโตขึ้นและข้อมูลกระทบยอดยากขึ้น อาจถึงเวลาทบทวนระบบบัญชีและกระบวนการ ซึ่งไม่จำเป็นต้องเป็นการเปลี่ยนระบบเสมอไป',
    services: ['accounting-system', 'accounting-systems-erp-advisory'],
  },
];

export const healthQuestions: HealthQuestion[] = [
  { id: 'q1', dimension: 'foundation', text: 'งานบัญชีรายเดือนเป็นปัจจุบัน ไม่ค้างหลายเดือน' },
  { id: 'q2', dimension: 'foundation', text: 'เอกสาร เช่น ใบกำกับภาษีและใบเสร็จ จัดเก็บเป็นระบบและค้นหาได้' },
  { id: 'q3', dimension: 'cost', text: 'คุณทราบอัตรากำไรขั้นต้น (Gross Margin) ของธุรกิจ' },
  { id: 'q4', dimension: 'cost', text: 'คุณแยกได้ว่าสินค้า บริการ สาขา หรือโครงการใดทำกำไรจริง' },
  { id: 'q5', dimension: 'visibility', text: 'ผู้บริหารอธิบายได้ว่าตัวเลขสำคัญเปลี่ยนจากงวดก่อนเพราะอะไร' },
  { id: 'q6', dimension: 'visibility', text: 'คุณเห็นสถานะเงินสดและสภาพคล่องชัดพอสำหรับการตัดสินใจ' },
  { id: 'q7', dimension: 'planning', text: 'ธุรกิจมีงบประมาณหรือเป้าหมายทางการเงินที่กำหนดไว้' },
  { id: 'q8', dimension: 'planning', text: 'มีการเปรียบเทียบผลจริงกับงบประมาณหรือสิ่งที่คาดไว้อย่างสม่ำเสมอ' },
  { id: 'q9', dimension: 'management-info', text: 'ผู้บริหารเห็นตัวเลขสำคัญที่ต้องติดตามได้ในที่เดียว' },
  { id: 'q10', dimension: 'management-info', text: 'ข้อมูลสำคัญไม่ได้กระจายอยู่ในหลายไฟล์หรือขึ้นกับคนใดคนหนึ่ง' },
  { id: 'q11', dimension: 'complexity', text: 'ช่วงที่ผ่านมา ธุรกิจมีรายการ พนักงาน สาขา หรือหน่วยงานเพิ่มขึ้นชัดเจน', reverse: true },
  { id: 'q12', dimension: 'complexity', text: 'การกระทบยอดหรือรวบรวมข้อมูลเริ่มใช้เวลานานขึ้น', reverse: true },
];

/** คะแนนต่อคำตอบ: 2 = ไม่ต้องกังวล · 1 = บางส่วน · 0 = ควรดู */
export function answerPoints(answer: AnswerValue, reverse = false): number {
  const base = answer === 'yes' ? 2 : answer === 'partly' ? 1 : 0;
  return reverse ? 2 - base : base;
}

/** 2 คำถามต่อด้าน (0–4): ≥3 มั่นคง · 2 ควรทบทวน · ≤1 ควรให้ความสนใจ */
export function stateForPoints(points: number, max: number): DimensionState {
  const ratio = max === 0 ? 1 : points / max;
  if (ratio >= 0.75) return 'stable';
  if (ratio >= 0.5) return 'review';
  return 'attention';
}

export interface DimensionResult {
  id: DimensionId;
  state: DimensionState;
}

export interface HealthCheckResult {
  complete: boolean;
  answered: number;
  total: number;
  dimensions: DimensionResult[];
  /** ด้านที่ควรพิจารณา เรียง attention ก่อน review (ตามลำดับเดิม) */
  focus: DimensionId[];
}

export function evaluateHealthCheck(answers: Partial<Record<string, AnswerValue>>): HealthCheckResult {
  const answered = healthQuestions.filter((q) => answers[q.id] !== undefined).length;
  const total = healthQuestions.length;
  const complete = answered === total;
  const dimensions: DimensionResult[] = healthDimensions.map((d) => {
    const qs = healthQuestions.filter((q) => q.dimension === d.id);
    const points = qs.reduce((sum, q) => {
      const a = answers[q.id];
      return sum + (a === undefined ? 0 : answerPoints(a, q.reverse));
    }, 0);
    return { id: d.id, state: stateForPoints(points, qs.length * 2) };
  });
  const focus = complete
    ? [
        ...dimensions.filter((d) => d.state === 'attention').map((d) => d.id),
        ...dimensions.filter((d) => d.state === 'review').map((d) => d.id),
      ]
    : [];
  return { complete, answered, total, dimensions, focus };
}
