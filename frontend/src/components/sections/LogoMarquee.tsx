/**
 * ประเภทธุรกิจที่บริการของเรารองรับ
 * หมายเหตุ: เป็น "ประเภทธุรกิจ" ไม่ใช่ชื่อหรือโลโก้ของลูกค้า — ห้ามใส่ชื่อบริษัทที่ไม่ได้รับอนุญาต
 */
const businessTypes = [
  'E-Commerce',
  'ร้านอาหารและคาเฟ่',
  'โรงงานและการผลิต',
  'ธุรกิจบริการ',
  'นำเข้าและส่งออก',
  'อสังหาริมทรัพย์',
  'Startup / SME',
  'ธุรกิจครอบครัว',
];

export function LogoMarquee() {
  return (
    <section className="border-y border-borderc bg-white py-10" aria-labelledby="business-types-heading">
      <div className="container">
        <p id="business-types-heading" className="text-center text-sm font-medium text-muted">
          ประเภทธุรกิจที่เรารองรับ
        </p>
      </div>
      <div className="mask-fade-x mt-6 flex overflow-hidden">
        <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...businessTypes, ...businessTypes].map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= businessTypes.length ? true : undefined}
              className="whitespace-nowrap font-display text-lg font-bold text-navy/30 transition-colors hover:text-navy/60 dark:text-white/40 dark:hover:text-white/70"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
