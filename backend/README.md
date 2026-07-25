# S2 Backend

Node.js + Express + TypeScript REST API

รันที่ **Port 9899**

## Environment

สร้างไฟล์ `.env` จาก `.env.example`:

```env
NODE_ENV=development
PORT=9899
FRONTEND_URL=http://localhost:9898
```

- `PORT` — พอร์ตที่ Backend รัน
- `FRONTEND_URL` — origin เดียวที่ CORS อนุญาต (ไม่ใช้ `*`)

## Scripts

```bash
npm run dev        # dev (tsx watch) ที่ port 9899
npm run build      # compile TypeScript → dist/
npm run start      # รัน production จาก dist/
npm run typecheck  # ตรวจ type โดยไม่ emit
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
| GET | `/api/health` | สถานะ Backend `{ status, service, port, ... }` |
| GET | `/api/services` | รายการบริการ |
| GET | `/api/packages` | รายการแพ็กเกจ |
| POST | `/api/contact` | ส่งฟอร์มติดต่อ |
| POST | `/api/consultations` | ส่งคำขอนัดปรึกษา |

## Security

- **Helmet** — ตั้งค่า security headers
- **CORS** — อนุญาตเฉพาะ `FRONTEND_URL` รองรับ preflight และ methods ที่จำเป็น
- **Zod validation** — ตรวจสอบและ sanitize ทุก request body
- **Rate limit** — จำกัดการเรียก endpoint ฟอร์ม (10 ครั้ง/15 นาที/IP) และ API รวม
- **Body size limit** — จำกัด request body ที่ 64kb
- **Central error handler** — ไม่เปิดเผย stack trace ใน production
- `.env` ไม่ถูก commit (อยู่ใน `.gitignore`)

## หมายเหตุ

ข้อมูล services/packages และ lead ปัจจุบันเก็บในไฟล์/หน่วยความจำสำหรับ demo
โครงสร้าง service layer (`services/*.service.ts`) ออกแบบให้เปลี่ยนไปใช้ Database
(เช่น Prisma/TypeORM) ได้โดยไม่กระทบ controller และ route
