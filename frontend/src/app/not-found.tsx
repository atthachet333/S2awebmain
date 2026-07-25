import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-hero-radial pt-24">
      <div className="container text-center">
        <p className="font-display text-7xl font-bold text-gradient md:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy md:text-3xl">ไม่พบหน้าที่คุณค้นหา</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว ลองกลับไปหน้าหลักหรือดูบริการของเรา
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            <Home className="h-4 w-4" />
            กลับหน้าหลัก
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-borderc bg-white px-6 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            ดูบริการของเรา
          </Link>
        </div>
      </div>
    </section>
  );
}
