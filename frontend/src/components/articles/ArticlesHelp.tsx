import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/utils';

/**
 * EP29 — แทนที่ฟอร์มสมัครรับข่าวสารเดิม (ไม่มีระบบส่งจริง) ด้วยช่องทางติดต่อที่ทำได้จริง
 * ไม่เก็บอีเมล และไม่สัญญาว่าจะส่งข่าวสาร/อัปเดตเป็นประจำ
 */
export function ArticlesHelp() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-dark px-6 py-12 text-center shadow-lift md:px-12">
      <div className="relative mx-auto max-w-xl">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white">มีคำถามเกี่ยวกับเรื่องที่อ่าน?</h2>
        <p className="mt-2 text-sm leading-relaxed text-primary-100/80">
          บทความเป็นข้อมูลทั่วไป สถานการณ์ของแต่ละธุรกิจอาจแตกต่างกัน หากต้องการพูดคุยเรื่องของธุรกิจคุณ ติดต่อทีม S2 ได้โดยตรง
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-primary-50"
          >
            ติดต่อทีม S2
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            LINE <span data-no-translate>{siteConfig.lineOA}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
