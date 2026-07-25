# S2 Frontend

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Framer Motion + React Hook Form + Zod

รันที่ **Port 9898**

## Environment

สร้างไฟล์ `.env.local` จาก `.env.example`:

```env
NEXT_PUBLIC_API_URL=http://localhost:9899
```

> URL ของ Backend ถูกอ้างอิงจากตัวแปรนี้จุดเดียวใน `src/lib/api.ts`
> ห้าม hardcode URL กระจายตาม component

## Scripts

```bash
npm run dev      # dev server ที่ port 9898
npm run build    # production build
npm run start    # รัน production ที่ port 9898
npm run lint     # ตรวจ ESLint
```

## โครงสร้างสำคัญ

```
src/
├── app/                 # หน้าเพจ (App Router) + metadata + sitemap/robots
├── components/
│   ├── navigation/      # Navbar, MobileMenu, Logo
│   ├── layout/          # Footer, PageHero, ScrollProgress, BackendStatus
│   ├── sections/        # ส่วนต่าง ๆ ของหน้า Home
│   ├── services/        # การ์ด/รายละเอียดบริการ
│   ├── pricing/         # การ์ดราคา + ตารางเปรียบเทียบ
│   ├── articles/        # บทความ + ค้นหา/กรอง
│   ├── forms/           # ContactForm (เชื่อม Backend)
│   ├── dashboard/       # Dashboard mockup + charts (SVG)
│   ├── animations/      # AnimatedSection, Stagger
│   └── ui/              # Button, Badge, SectionHeader
├── hooks/               # useCountUp, useScrolled, useServices ...
├── lib/
│   ├── api.ts           # ★ API Client กลาง (จุดเดียวที่เรียก Backend)
│   ├── icon-map.ts      # แปลงชื่อ icon (จาก API) เป็น Lucide component
│   └── ...
├── data/                # เนื้อหา/ข้อมูล fallback ในเครื่อง
└── types/
```

## การเชื่อมต่อ Backend

`src/lib/api.ts` เป็น client กลาง มีฟังก์ชัน:

- `api.checkHealth()`
- `api.getServices()`
- `api.getPackages()`
- `api.submitContactForm(payload)`
- `api.submitConsultationForm(payload)`

รองรับ timeout, error handling และ error message ภาษาไทยที่เป็นมิตรกับผู้ใช้
หาก Backend ไม่พร้อม หน้าเว็บยังแสดงผลได้ด้วยข้อมูล fallback ในเครื่อง (graceful degradation)
