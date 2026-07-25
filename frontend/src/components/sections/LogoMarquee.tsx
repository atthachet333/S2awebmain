const partners = [
  'ThaiTech Solutions',
  'The Green Retail',
  'Baan Cafe',
  'Siam Import Export',
  'Minimal Studio',
  'Mankong Property',
  'Urban Foods',
  'Nova Digital',
];

export function LogoMarquee() {
  return (
    <section className="border-y border-borderc bg-white py-10">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted">
          ได้รับความไว้วางใจจากธุรกิจชั้นนำหลากหลายอุตสาหกรรม
        </p>
      </div>
      <div className="mask-fade-x mt-6 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-bold text-navy/30 transition-colors hover:text-navy/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
