import Link from 'next/link';
import { BookOpenCheck, Check, Compass, Workflow } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';

/**
 * EP26 — โมเดลธุรกิจของ S2: บัญชี = รากฐาน · ที่ปรึกษาธุรกิจ = แกนหลัก · เทคโนโลยี = เครื่องมือ
 * เทคโนโลยีเป็นวิธีทำงานของทีม ไม่ใช่สินค้าที่ขาย — ห้ามใส่ผลลัพธ์ที่รับประกัน
 */
const layers = [
  {
    icon: BookOpenCheck,
    kicker: 'รากฐาน',
    title: 'งานบัญชีและภาษีที่เชื่อถือได้',
    description: 'การวิเคราะห์ดีได้เท่ากับข้อมูลที่ใช้ งานบัญชีจึงต้องครบ จัดประเภทถูก และกระทบยอดได้',
    points: ['รายการครบตามเอกสาร และกระทบยอดกับธนาคาร', 'จัดประเภทสม่ำเสมอ เทียบงวดต่องวดได้', 'ภาษีที่สอดคล้องกับรายการทางธุรกิจจริง'],
    core: false,
  },
  {
    icon: Compass,
    kicker: 'แกนหลัก',
    title: 'ที่ปรึกษาธุรกิจ',
    description: 'ช่วยผู้บริหารเข้าใจว่าตัวเลขเปลี่ยนเพราะอะไร และแต่ละทางเลือกมีผลอย่างไร',
    points: ['ต้นทุนและความสามารถในการทำกำไร', 'ผลประกอบการและรายงานผู้บริหาร', 'งบประมาณ ประมาณการ และการวางแผนภาษี', 'CFO Advisory'],
    core: true,
  },
  {
    icon: Workflow,
    kicker: 'เครื่องมือ',
    title: 'เทคโนโลยีที่ช่วยให้ทำงานได้ดีขึ้น',
    description: 'เทคโนโลยีเป็นเครื่องมือของทีม ไม่ใช่สินค้าที่ S2 ขาย ช่วยลดงานซ้ำ ทีมจึงมีเวลาวิเคราะห์มากขึ้น',
    points: ['Workflow เอกสารที่ตรวจย้อนหลังได้', 'รูปแบบรายงานคงที่ทุกงวด'],
    core: false,
  },
];

export function AdvisoryModel() {
  return (
    <section className="section bg-white" aria-labelledby="advisory-model-heading">
      <div className="container">
        <SectionHeader
          eyebrow="แนวทางของ S2"
          title={
            <span id="advisory-model-heading">
              {/* ไม่ใช้ช่องว่างระหว่างวลี (ภาษาจีนไม่เว้นวรรค) — ใช้ระยะขอบแทน */}
              <span className="inline-block pr-[0.3em]">บัญชีคือรากฐาน</span>
              <span className="inline-block">การให้คำปรึกษาคือหัวใจของงานเรา</span>
            </span>
          }
          description="บัญชีให้ข้อเท็จจริงที่เชื่อถือได้ งานที่ปรึกษาช่วยผู้บริหารเข้าใจข้อเท็จจริงนั้นและประเมินการตัดสินใจ ส่วนเทคโนโลยีช่วยให้ทำงานได้สม่ำเสมอ"
        />

        <StaggerGroup className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3 lg:items-stretch">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <StaggerItem
                key={layer.title}
                className={
                  layer.core
                    ? 'relative flex flex-col overflow-hidden rounded-3xl bg-navy-gradient p-7 text-white shadow-card lg:-my-3 lg:p-8'
                    : 'flex flex-col rounded-3xl border border-borderc bg-white p-7 shadow-soft'
                }
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      layer.core
                        ? 'flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky'
                        : 'flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-accent'
                    }
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${layer.core ? 'text-gold' : 'text-accent'}`}
                  >
                    {`0${i + 1}`} · {layer.kicker}
                  </p>
                </div>
                <h3 className={`mt-5 text-xl font-bold ${layer.core ? 'text-white md:text-2xl' : 'text-navy'}`}>
                  {layer.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${layer.core ? 'text-primary-100/85' : 'text-muted'}`}>
                  {layer.description}
                </p>
                <ul className={`mt-5 space-y-2.5 border-t pt-5 ${layer.core ? 'border-white/10' : 'border-borderc'}`}>
                  {layer.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2.5 text-sm ${layer.core ? 'text-primary-100/90' : 'text-ink/80'}`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${layer.core ? 'text-gold' : 'text-accent'}`}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* EP: เทคโนโลยีเป็นส่วนสนับสนุน — รายละเอียดพันธมิตรอยู่ที่หน้า /partners */}
        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-muted">
          เมื่อธุรกิจต้องการระบบเฉพาะ เช่น ERP หรือการเชื่อมต่อระบบ S2 ทำงานร่วมกับ PDA BLISS ซึ่งเป็นนิติบุคคลแยก กำหนดขอบเขตและเสนอราคาแยก{' '}
          <Link href="/partners" className="font-semibold text-accent underline-offset-4 hover:underline">
            ดูหลักการทำงานกับพันธมิตร
          </Link>
        </p>
      </div>
    </section>
  );
}
