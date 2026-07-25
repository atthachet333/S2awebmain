'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import {
  contactSchema,
  businessTypes,
  serviceOptions,
  type ContactFormValues,
} from '@/lib/contact-schema';
import { api, ApiRequestError } from '@/lib/api';
import { cn } from '@/lib/utils';

const fieldBase =
  'h-12 w-full rounded-xl border bg-white px-4 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    try {
      // เรียก Backend ผ่าน API Client กลาง (ไม่เรียก fetch ตรงใน component)
      await api.submitContactForm({
        companyName: data.company,
        contactName: data.name,
        phone: data.phone,
        email: data.email,
        businessType: data.businessType,
        interestedServices: [data.service],
        message: data.message || '',
      });
      setSubmitted(true);
      reset();
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
          ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับภายใน 1 วันทำการ
          เพื่อนัดหมายการปรึกษาที่เหมาะกับคุณ
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
            placeholder="08X-XXX-XXXX"
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
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-borderc text-accent focus:ring-accent"
          />
          <span className="text-sm leading-relaxed text-muted">
            ข้าพเจ้ายินยอมให้ S2 Accounting &amp; Finance Advisory เก็บและใช้ข้อมูลส่วนบุคคล
            เพื่อวัตถุประสงค์ในการติดต่อกลับและให้บริการ ตาม
            <span className="font-medium text-accent"> นโยบายความเป็นส่วนตัว (PDPA)</span>
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
            กำลังส่งข้อมูล...
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
