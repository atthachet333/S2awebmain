'use client';

import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-dark px-6 py-12 text-center shadow-lift md:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-xl">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Mail className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white">รับความรู้ด้านบัญชีและการเงิน</h2>
        <p className="mt-2 text-sm text-primary-100/80">
          สมัครรับบทความและอัปเดตกฎหมายภาษีใหม่ๆ ส่งตรงถึงอีเมลของคุณทุกเดือน
        </p>

        {submitted ? (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-3 text-sm font-medium text-emerald-300">
            <CheckCircle2 className="h-5 w-5" />
            ขอบคุณสำหรับการสมัคร เราจะส่งข่าวสารดีๆ ให้คุณเร็วๆ นี้
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="อีเมลของคุณ"
              aria-label="อีเมลสำหรับรับข่าวสาร"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-primary-100/60 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-primary-50"
            >
              สมัครรับข่าวสาร
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
