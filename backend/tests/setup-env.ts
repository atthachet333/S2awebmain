/**
 * ค่าคงที่สำหรับการทดสอบ — ต้อง import ก่อน src/* เพื่อไม่ให้ผลทดสอบขึ้นกับค่าใน .env จริง
 * (dotenv ไม่เขียนทับตัวแปรที่ตั้งไว้แล้ว)
 */
process.env.NODE_ENV = 'test';
process.env.FRONTEND_URL = 'https://www.s2aconsultant.com,http://localhost:9898';
process.env.TRUST_PROXY = '0';
process.env.RESEND_API_KEY = '';
