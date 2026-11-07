'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send, AlertCircle, UploadCloud, FileText, X } from 'lucide-react';
import {
  contactSchema,
  businessTypes,
  serviceOptions,
  pricingIntentOptions,
  type ContactFormValues,
} from '@/lib/contact-schema';
import { api, ApiRequestError } from '@/lib/api';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const fieldBase =
  'h-12 w-full rounded-xl border bg-white px-4 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none';

// 👇 เพิ่มฟังก์ชันแปลงไฟล์เป็น Base64 ตรงนี้
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]); // ตัดส่วนหัว data:image/...;base64, ออก
    };
    reader.onerror = (error) => reject(error);
  });
};

// ตรวจเบื้องต้นฝั่งผู้ใช้ — Backend ตรวจซ้ำทั้งนามสกุล ลายเซ็นไฟล์ และขนาดจริง
const ALLOWED_FILE_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png'];
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  
  // State สำหรับจัดการไฟล์อัปโหลด
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  // เลือกบริการให้อัตโนมัติเมื่อมาจากหน้า Pricing (?service=premium|enterprise|custom)
  useEffect(() => {
    const intent = new URLSearchParams(window.location.search).get('service');
    const option = intent ? pricingIntentOptions[intent] : undefined;
    if (option) setValue('service', option);
  }, [setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (file) {
      const ext = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();
      const typeOk =
        ALLOWED_FILE_EXTENSIONS.includes(ext) && (!file.type || ALLOWED_FILE_TYPES.includes(file.type));
      if (!typeOk || file.size === 0) {
        setFileError('รองรับเฉพาะไฟล์ .pdf, .jpg, .jpeg และ .png เท่านั้น');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError('ขนาดไฟล์ใหญ่เกินไป กรุณาแนบไฟล์ขนาดไม่เกิน 10 MB');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    try {
      let fileBase64;
      let fileName;

      // 👇 ถ้ามีการเลือกไฟล์ ให้แปลงเป็น Base64 ก่อนส่ง
      if (selectedFile) {
        fileName = selectedFile.name;
        fileBase64 = await getBase64(selectedFile);
      }

      await api.submitContactForm({
        companyName: data.company,
        contactName: data.name,
        phone: data.phone,
        email: data.email,
        businessType: data.businessType,
        interestedServices: [data.service],
        message: data.message || '',
        fileName, // 👈 ส่งชื่อไฟล์ไปให้ Backend
        fileBase64, // 👈 ส่งไฟล์ Base64 ไปให้ Backend
        consent: data.consent,
      }, { timeout: 60_000 });
      
      setSubmitted(true);
      reset();
      setSelectedFile(null);
    } catch (err) {
      const message =
        err instanceof ApiRequestError
          ? err.message
          : 'เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง';
      setServerError(message);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-borderc bg-white p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">ส่งข้อมูลเรียบร้อยแล้ว</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          ขอบคุณที่ติดต่อเรา โดยปกติทีมงานจะติดต่อกลับภายใน 1–2 วันทำการ
          เพื่อพูดคุยเกี่ยวกับความต้องการของคุณ
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-borderc px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
        >
          ส่งข้อมูลอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-borderc bg-white p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="ชื่อบริษัท" error={errors.company?.message} htmlFor="company" required>
          <input
            id="company"
            {...register('company')}
            placeholder="บริษัท ตัวอย่าง จำกัด"
            aria-invalid={!!errors.company}
            className={cn(fieldBase, errors.company ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          />
        </Field>
        <Field label="ชื่อผู้ติดต่อ" error={errors.name?.message} htmlFor="name" required>
          <input
            id="name"
            {...register('name')}
            placeholder="ชื่อ - นามสกุล"
            aria-invalid={!!errors.name}
            className={cn(fieldBase, errors.name ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          />
        </Field>
        <Field label="เบอร์โทรศัพท์" error={errors.phone?.message} htmlFor="phone" required>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="0XX-XXX-XXXX"
            aria-invalid={!!errors.phone}
            className={cn(fieldBase, errors.phone ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          />
        </Field>
        <Field label="อีเมล" error={errors.email?.message} htmlFor="email" required>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            className={cn(fieldBase, errors.email ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          />
        </Field>
        <Field label="ประเภทธุรกิจ" error={errors.businessType?.message} htmlFor="businessType" required>
          <select
            id="businessType"
            {...register('businessType')}
            defaultValue=""
            aria-invalid={!!errors.businessType}
            className={cn(fieldBase, 'cursor-pointer', errors.businessType ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          >
            <option value="" disabled>
              เลือกประเภทธุรกิจ
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="บริการที่สนใจ" error={errors.service?.message} htmlFor="service" required>
          <select
            id="service"
            {...register('service')}
            defaultValue=""
            aria-invalid={!!errors.service}
            className={cn(fieldBase, 'cursor-pointer', errors.service ? 'border-rose-400' : 'border-borderc focus:border-accent')}
          >
            <option value="" disabled>
              เลือกบริการ
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="รายละเอียดเพิ่มเติม" error={errors.message?.message} htmlFor="message">
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            placeholder="เล่าเกี่ยวกับธุรกิจและสิ่งที่คุณต้องการให้เราช่วย..."
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none',
              errors.message ? 'border-rose-400' : 'border-borderc focus:border-accent',
            )}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-navy">
          เอกสารประกอบเพิ่มเติม (สูงสุด 10 MB)
        </label>
        {!selectedFile ? (
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-borderc border-dashed rounded-xl cursor-pointer bg-[#f8fbff] hover:bg-blue-50/50 dark:bg-white/5 dark:hover:bg-white/10 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-8 h-8 mb-3 text-accent opacity-80" />
              <p className="mb-1 text-sm text-navy">
                <span className="font-semibold text-accent">คลิกเพื่ออัปโหลด</span> หรือลากไฟล์มาวาง
              </p>
              <p className="text-xs text-muted">PDF, JPG, PNG ขนาดไม่เกิน 10 MB</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="flex items-center justify-between w-full p-4 border border-borderc rounded-xl bg-white shadow-sm">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <FileText className="h-5 w-5" />
              </div>
              <div className="truncate">
                <p className="truncate text-sm font-semibold text-navy">{selectedFile.name}</p>
                <p className="text-xs text-muted">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              aria-label="ลบไฟล์ที่แนบ"
              className="shrink-0 p-2 text-muted hover:text-rose-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        {fileError && (
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-500">
            <AlertCircle className="h-4 w-4" />
            {fileError}
          </p>
        )}
        <p className="mt-1.5 text-xs leading-relaxed text-muted">
          กรุณาแนบเฉพาะเอกสารที่จำเป็นต่อการประเมินบริการ ไฟล์จะถูกส่งถึงทีมงานทางอีเมลเท่านั้น และไม่เผยแพร่บนเว็บไซต์
        </p>
      </div>

      <div className="mt-5">
  <label className="flex cursor-pointer items-start gap-3">
    <input
      type="checkbox"
      {...register('consent')}
      className="mt-0.5 h-5 w-5 shrink-0 rounded border-borderc text-accent focus:ring-accent"
    />
    <span className="text-sm leading-relaxed text-muted">
      <span>ข้าพเจ้ายินยอมให้ S2 Accounting Consultant ใช้ข้อมูลที่ให้ไว้เพื่อติดต่อกลับ ประเมินบริการที่ขอ จัดทำใบเสนอราคา (ถ้ามี) และจัดการคำขอนี้ ตามนโยบายความเป็นส่วนตัว</span>{' '}
      <Link
        href="/privacy"
        target="_blank"
        rel="noopener"
        className="font-medium text-accent hover:underline"
      >
        อ่านนโยบายความเป็นส่วนตัว
      </Link>
    </span>
  </label>
  {errors.consent && (
    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-500">
      <AlertCircle className="h-4 w-4" />
      {errors.consent.message}
    </p>
  )}
</div>

      {serverError && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient text-base font-semibold text-white shadow-glow transition-all hover:shadow-lift hover:brightness-105 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            กำลังเตรียมไฟล์และส่งข้อมูล...
          </>
        ) : (
          <>
            ส่งข้อมูลนัดปรึกษา
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  required,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-500">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}
