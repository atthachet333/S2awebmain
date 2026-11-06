import { ArrowRight, BookOpenCheck, Check, Compass, Workflow } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection, StaggerGroup, StaggerItem } from '@/components/animations/AnimatedSection';

/**
 * EP26 — โมเดลธุรกิจของ S2: บัญชี = รากฐาน · ที่ปรึกษาธุรกิจ = แกนหลัก · เทคโนโลยี = เครื่องมือ
 * เทคโนโลยีเป็นวิธีทำงานของทีม ไม่ใช่สินค้าที่ขาย — ห้ามใส่ผลลัพธ์ที่รับประกัน
 */
const layers = [
  {
    icon: BookOpenCheck,
    kicker: 'รากฐาน',
    title: 'งานบัญชีและภาษีที่เชื่อถือได้',
    description: 'ข้อมูลที่ถูกต้องและเป็นระบบ คือจุดเริ่มต้นของการเข้าใจธุรกิจ',
    points: ['บันทึกบัญชีและปิดงบอย่างเป็นระบบ', 'ภาษีถูกต้องและยื่นตรงเวลา', 'เอกสารและข้อมูลธุรกิจที่มีโครงสร้าง'],
    core: false,
  },
  {
    icon: Compass,
    kicker: 'แกนหลัก',
    title: 'ที่ปรึกษาธุรกิจ',
    description: 'ช่วยผู้บริหารตีความตัวเลข และใช้ข้อมูลประกอบการตัดสินใจทางธุรกิจ',
    points: ['ต้นทุนและความสามารถในการทำกำไร', 'ผลประกอบการและรายงานผู้บริหาร', 'งบประมาณ ประมาณการ และการวางแผนภาษี', 'CFO Advisory'],
    core: true,
  },
  {
    icon: Workflow,
    kicker: 'เครื่องมือ',
    title: 'เทคโนโลยีที่ช่วยให้ทำงานได้ดีขึ้น',
    description: 'ลดงานซ้ำและข้อผิดพลาด เตรียมข้อมูลได้เร็วขึ้น ทีมจึงมีเวลาให้คำปรึกษามากขึ้น',
    points: ['Workflow เอกสารที่เป็นระบบ', 'รายงานที่สม่ำเสมอและพร้อมใช้เร็วขึ้น'],
    core: false,
  },
];

/** ข้อมูลบัญชี → ความเข้าใจทางการเงิน → ข้อมูลเชิงธุรกิจ → การตัดสินใจที่ดีขึ้น */
const insightFlow = ['ข้อมูลบัญชี', 'ความเข้าใจทางการเงิน', 'ข้อมูลเชิงธุรกิจ', 'การตัดสินใจที่ดีขึ้น'];

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
          description="เราเริ่มจากข้อมูลบัญชีและภาษีที่ถูกต้อง แล้วช่วยผู้บริหารเปลี่ยนตัวเลขเหล่านั้นเป็นความเข้าใจและการตัดสินใจทางธุรกิจ"
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

        {/* จากตัวเลข สู่การตัดสินใจ */}
        <AnimatedSection className="mx-auto mt-12 max-w-5xl rounded-3xl border border-borderc bg-lightblue/40 p-5 md:p-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-accent">
            จากตัวเลข สู่การตัดสินใจ
          </p>
          <ol className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            {insightFlow.map((step, i) => (
              <li key={step} className="flex flex-col items-center gap-2 sm:flex-row">
                <span className="rounded-full border border-borderc bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                  {step}
                </span>
                {i < insightFlow.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-accent sm:rotate-0" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </AnimatedSection>
      </div>
    </section>
  );
}
