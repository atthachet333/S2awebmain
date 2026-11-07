'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowRight, CheckCircle2, RotateCcw, Search } from 'lucide-react';
import {
  evaluateHealthCheck,
  healthDimensions,
  healthQuestions,
  type AnswerValue,
  type DimensionState,
} from '@/lib/healthCheck';
import { services } from '@/data/services';
import { track } from '@/lib/analytics';

const answerOptions: { value: AnswerValue; label: string }[] = [
  { value: 'yes', label: 'ใช่' },
  { value: 'partly', label: 'บางส่วน' },
  { value: 'no', label: 'ไม่ใช่ / ไม่แน่ใจ' },
];

const stateMeta: Record<DimensionState, { label: string; className: string; Icon: typeof CheckCircle2 }> = {
  stable: { label: 'มั่นคง', className: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300', Icon: CheckCircle2 },
  review: { label: 'ควรทบทวน', className: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300', Icon: Search },
  attention: { label: 'ควรให้ความสนใจ', className: 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300', Icon: AlertCircle },
};

export function HealthCheck() {
  const [answers, setAnswers] = useState<Partial<Record<string, AnswerValue>>>({});
  const [showResult, setShowResult] = useState(false);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const started = useRef(false);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const result = useMemo(() => evaluateHealthCheck(answers), [answers]);

  const setAnswer = (id: string, value: AnswerValue) => {
    if (!started.current) {
      started.current = true;
      track('health_check_start');
    }
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResult(false);
  };

  const submit = () => {
    if (!result.complete) {
      setShowIncomplete(true);
      return;
    }
    setShowIncomplete(false);
    setShowResult(true);
    track('health_check_complete', { categories: result.focus.join(',') || 'none' });
  };

  // เลื่อนไปที่ผลและย้ายโฟกัสหลังจากผลแสดงแล้ว (ไม่พึ่ง requestAnimationFrame ซึ่งหยุดทำงานในแท็บเบื้องหลัง)
  useEffect(() => {
    if (!showResult) return;
    resultHeading.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    resultHeading.current?.focus({ preventScroll: true });
  }, [showResult]);

  const reset = () => {
    setAnswers({});
    setShowResult(false);
    setShowIncomplete(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const topFocus = result.focus[0];
  const contactHref = `/contact?source=health-check&interest=${topFocus ?? 'general'}#contact-form`;

  return (
    <div className="mx-auto max-w-4xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        noValidate
      >
        <div className="space-y-10">
          {healthDimensions.map((dimension, di) => (
            <section key={dimension.id} aria-labelledby={`hc-${dimension.id}`}>
              <h2 id={`hc-${dimension.id}`} className="flex items-baseline gap-3 text-xl font-bold text-navy">
                <span className="font-display text-sm text-accent" aria-hidden="true">
                  {String(di + 1).padStart(2, '0')}
                </span>
                {dimension.title}
              </h2>
              <div className="mt-4 space-y-4">
                {healthQuestions
                  .filter((q) => q.dimension === dimension.id)
                  .map((q) => (
                    <fieldset key={q.id} className="rounded-2xl border border-borderc bg-white p-5 shadow-soft">
                      <legend className="sr-only">{q.text}</legend>
                      <p className="font-medium text-navy" aria-hidden="true">
                        {q.text}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {answerOptions.map((opt) => {
                          const checked = answers[q.id] === opt.value;
                          return (
                            <label
                              key={opt.value}
                              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-accent ${
                                checked
                                  ? 'border-accent bg-accent text-white'
                                  : 'border-borderc bg-white text-navy hover:border-accent'
                              }`}
                            >
                              <input
                                type="radio"
                                name={q.id}
                                value={opt.value}
                                checked={checked}
                                onChange={() => setAnswer(q.id, opt.value)}
                                className="sr-only"
                              />
                              {opt.label}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted" aria-live="polite">
            ตอบแล้ว <span data-no-translate>{result.answered}/{result.total}</span> ข้อ
          </p>
          <button
            type="submit"
            className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            ดูผลการประเมิน
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          {showIncomplete && !result.complete && (
            <p className="text-sm font-medium text-rose-600 dark:text-rose-300" role="alert">
              กรุณาตอบให้ครบทุกข้อเพื่อดูผล
            </p>
          )}
        </div>
      </form>

      {showResult && result.complete && (
        <section className="mt-14 rounded-3xl border border-borderc bg-lightblue/40 p-6 md:p-10" aria-labelledby="hc-result-heading">
          <h2 id="hc-result-heading" ref={resultHeading} tabIndex={-1} className="scroll-mt-28 text-display-md font-bold text-navy outline-none">
            สิ่งที่คำตอบของคุณบ่งชี้
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            {result.focus.length === 0
              ? 'จากคำตอบ รากฐานในด้านที่ถามดูค่อนข้างมั่นคง หากธุรกิจกำลังเปลี่ยนแปลง การทบทวนเป็นระยะยังช่วยได้'
              : 'จากคำตอบ บางด้านอาจควรพิจารณาให้ละเอียดขึ้น ดูรายละเอียดด้านล่าง ผลนี้เป็นภาพเบื้องต้นจากคำตอบของคุณเท่านั้น'}
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {result.dimensions.map((d) => {
              const dim = healthDimensions.find((x) => x.id === d.id)!;
              const meta = stateMeta[d.state];
              const Icon = meta.Icon;
              return (
                <li key={d.id} className="rounded-2xl border border-borderc bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-navy">{dim.title}</h3>
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${meta.className}`}>
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {meta.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {d.state === 'stable' ? dim.stableText : dim.focusText}
                  </p>
                  {d.state !== 'stable' && (
                    <>
                      <p className="mt-3 text-xs text-muted">บริการที่เกี่ยวข้อง</p>
                      <ul className="mt-1.5 flex flex-wrap gap-2">
                        {dim.services.map((slug) => {
                          const s = services.find((x) => x.slug === slug);
                          if (!s) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/services#${slug}`}
                                className="block rounded-full border border-borderc bg-primary-50/60 px-3 py-1 text-xs font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
                              >
                                {s.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={contactHref}
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              คุยกับ S2 เกี่ยวกับผลนี้
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services#advisory-capabilities"
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-borderc bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
            >
              ดูความสามารถด้านที่ปรึกษา
            </Link>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-muted hover:text-accent"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              เริ่มใหม่
            </button>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            ผลนี้ไม่ใช่การตรวจสอบบัญชี ไม่ใช่คำแนะนำด้านบัญชีหรือภาษี และไม่ใช่การรับประกันผลใดๆ การส่งต่อไปหน้าติดต่อจะไม่ส่งคำตอบของคุณ
          </p>
        </section>
      )}
    </div>
  );
}
