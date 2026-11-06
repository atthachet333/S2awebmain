# S2 Backend

Node.js + Express + TypeScript REST API

รันที่ **Port 9899**

## Environment

สร้างไฟล์ `.env` จาก `.env.example`:

```env
NODE_ENV=development
PORT=9899
FRONTEND_URL=http://localhost:9898
TRUST_PROXY=0
RESEND_API_KEY=your_resend_api_key
MAIL_FROM=S2 Website <onboarding@resend.dev>
CONTACT_EMAIL=office@s2aconsultant.com
```

- `PORT` — พอร์ตที่ Backend รัน
- `FRONTEND_URL` — origin ที่ CORS อนุญาต คั่นหลายค่าด้วย comma เช่น `https://s2aconsultant.com,https://www.s2aconsultant.com` (ไม่ใช้ `*`)
- `TRUST_PROXY` — จำนวน proxy หน้า Backend (เช่น `1` เมื่ออยู่หลัง Cloudflare/nginx หนึ่งชั้น) เพื่อให้ rate limit ใช้ IP จริง; ค่าเริ่มต้น `0`
- `RESEND_API_KEY` — API key สำหรับส่งอีเมลผ่าน Resend (ห้าม commit ค่าจริง)
- `MAIL_FROM` — verified sender ของ Resend; คงค่าเดิมไว้จนกว่าโดเมนบริษัทจะ verify แล้ว
- `CONTACT_EMAIL` — ผู้รับ notification จาก Contact และ Consultation form

## Scripts

```bash
npm run dev        # dev (tsx watch) ที่ port 9899
npm run build      # compile TypeScript → dist/
npm run start      # รัน production จาก dist/
npm run typecheck  # ตรวจ type โดยไม่ emit
npm test           # compile + รัน unit/HTTP tests (node:test) → .test-dist/
```

## โครงสร้าง

```
src/
├── server.ts            # entry point (listen + graceful shutdown)
├── app.ts               # สร้าง Express app + middleware + routes
├── config/
│   └── env.ts           # อ่าน/กำหนดค่า environment
├── routes/              # นิยาม endpoint
├── controllers/         # จัดการ request/response
├── services/            # business logic + data access (พร้อมต่อ DB)
├── schemas/             # Zod validation schemas
├── middleware/          # validate, rateLimit, errorHandler, notFound
├── data/                # ข้อมูล demo (services, packages)
├── utils/               # ApiError, asyncHandler
└── types/
```

## Endpoints

| Method | Path | คำอธิบาย |
|--------|------|----------|
| GET | `/api/health` | สถานะ Backend `{ status, timestamp }` |
| GET | `/api/services` | รายการบริการ |
| GET | `/api/packages` | รายการแพ็กเกจ |
| POST | `/api/contact` | ส่งฟอร์มติดต่อ |
| POST | `/api/consultations` | ส่งคำขอนัดปรึกษา |

## Security

- **Helmet** — ตั้งค่า security headers
- **CORS** — allowlist จาก `FRONTEND_URL`, methods GET/POST/OPTIONS, header `Content-Type`, ไม่ส่ง credentials
- **Zod validation** — schema แบบ strict (ปฏิเสธ field ที่ไม่คาดหมาย) จำกัดความยาว และกันอักขระควบคุม/ขึ้นบรรทัดในช่องบรรทัดเดียว
- **ไฟล์แนบ** — PDF/JPG/JPEG/PNG เท่านั้น ตรวจนามสกุล + magic bytes + ขนาดจริง ≤ 10 MB, ทำความสะอาดชื่อไฟล์, ไม่บันทึกลงดิสก์ (ส่งแนบอีเมลเท่านั้น) — ยังไม่มีการสแกนมัลแวร์
- **Rate limit** — ฟอร์ม 10 ครั้ง/15 นาที และ 30 ครั้ง/วัน ต่อ IP; API รวม 120 ครั้ง/นาที (ทำงานก่อน parse body)
- **Body size limit** — `/api/contact` 15 MB (รองรับไฟล์ Base64), endpoint อื่น 100 KB; JSON เท่านั้น
- **Central error handler** — ข้อความทั่วไป ไม่เปิดเผย stack/รายละเอียดผู้ให้บริการ; log เฉพาะชื่อ/ข้อความ error ไม่ log เนื้อหาฟอร์ม
- **404** — ข้อความทั่วไป ไม่สะท้อน URL ที่ร้องขอ
- `.env` ไม่ถูก commit (อยู่ใน `.gitignore`)

## หมายเหตุ

- ข้อมูลจากแบบฟอร์มไม่ถูกเก็บในหน่วยความจำ ฐานข้อมูล หรือดิสก์ — ถูกส่งต่อเป็นอีเมลผ่าน Resend แล้วทิ้ง
  การเก็บรักษาจริงจึงอยู่ที่กล่องอีเมลของบริษัท (เจ้าของต้องกำหนดระยะเวลาเก็บรักษาเอง)
- `/api/services` และ `/api/packages` เป็นข้อมูล demo เดิม (ราคาไม่ตรงกับหน้า Pricing ปัจจุบัน) Frontend ไม่ได้ใช้แล้ว
