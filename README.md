# S2 Accounting & Finance Advisory

เว็บไซต์บริษัทให้บริการด้านบัญชี ภาษี การเงิน และที่ปรึกษาธุรกิจ
โครงสร้างแบบ **monorepo** แยก Frontend และ Backend ออกจากกันอย่างชัดเจน

```
project-root/
├── frontend/          # Next.js 15 + TypeScript + Tailwind (Port 9898)
├── backend/           # Node.js + Express + TypeScript REST API (Port 9899)
├── package.json       # Root scripts (concurrently)
├── .gitignore
└── README.md
```

- Frontend ติดต่อ Backend ผ่าน **REST API เท่านั้น** (ไม่เรียก database โดยตรง)
- URL ของ Backend กำหนดผ่าน Environment Variable จุดเดียว (`NEXT_PUBLIC_API_URL`)
- CORS ของ Backend อนุญาตเฉพาะ origin ของ Frontend (`FRONTEND_URL`)

## Port

| ส่วน | URL |
|------|-----|
| Frontend | http://localhost:9898 |
| Backend | http://localhost:9899 |
| Health Check | http://localhost:9899/api/health |

## การติดตั้ง

```bash
# ติดตั้ง dependencies ทั้ง root, frontend และ backend
npm run install:all
```

หรือติดตั้งทีละส่วน:

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

จากนั้นคัดลอกไฟล์ env ตัวอย่าง:

```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

## การรัน (Development)

```bash
# รัน Frontend + Backend พร้อมกัน
npm run dev
```

หรือแยกกัน:

```bash
npm run dev:backend    # http://localhost:9899
npm run dev:frontend   # http://localhost:9898
```

## การ Build (Production)

```bash
npm run build          # build ทั้ง backend และ frontend
npm run start          # รัน production ทั้งสองส่วน
```

## การทดสอบ API

```bash
# Health check
curl http://localhost:9899/api/health

# รายการบริการ
curl http://localhost:9899/api/services

# แพ็กเกจ
curl http://localhost:9899/api/packages

# ส่งฟอร์มติดต่อ
curl -X POST http://localhost:9899/api/contact \
  -H "Content-Type: application/json" \
  -d '{"companyName":"Example","contactName":"Somchai","phone":"0812345678","email":"a@b.com","businessType":"SME","interestedServices":["accounting"],"message":"ทดสอบ"}'
```

## API Endpoints

| Method | Path | คำอธิบาย |
|--------|------|----------|
| GET | `/api/health` | สถานะ Backend |
| GET | `/api/services` | รายการบริการ |
| GET | `/api/packages` | รายการแพ็กเกจ |
| POST | `/api/contact` | ส่งฟอร์มติดต่อ (validate + rate limit) |
| POST | `/api/consultations` | ส่งคำขอนัดปรึกษา (validate + rate limit) |

รายละเอียดเพิ่มเติมของแต่ละส่วนดูได้ที่ [frontend/README.md](frontend/README.md) และ [backend/README.md](backend/README.md)
