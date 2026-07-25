'use client';

import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { BarChart, LineChart, DonutChart } from './MiniChart';

const kpis = [
  { label: 'รายได้รวม', value: '฿4.82M', change: '+12.4%', up: true },
  { label: 'กำไรสุทธิ', value: '฿1.16M', change: '+8.1%', up: true },
  { label: 'กระแสเงินสด', value: '฿2.34M', change: '+5.6%', up: true },
  { label: 'อัตรากำไร', value: '24.1%', change: '-1.2%', up: false },
];

const expenses = [
  { label: 'ต้นทุนสินค้า', color: '#155EEF', pct: '42%' },
  { label: 'เงินเดือน', color: '#35C2D8', pct: '28%' },
  { label: 'การตลาด', color: '#20B8A5', pct: '18%' },
  { label: 'อื่นๆ', color: '#D7A84A', pct: '12%' },
];

/** A realistic executive finance dashboard mockup, fully rendered in the DOM. */
export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-borderc bg-white shadow-card">
      {/* Window bar */}
      <div className="flex items-center justify-between border-b border-borderc bg-primary-50/60 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-xs font-medium text-muted">Executive Dashboard · กรกฎาคม 2567</span>
        <span className="rounded-full bg-white px-2.5 py-1 text-[0.65rem] font-semibold text-accent shadow-soft">
          Live
        </span>
      </div>

      <div className="space-y-4 p-4 md:p-5">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-borderc bg-white p-3">
              <p className="text-[0.7rem] font-medium text-muted">{kpi.label}</p>
              <p className="mt-1 font-display text-lg font-bold text-navy">{kpi.value}</p>
              <p
                className={`mt-0.5 flex items-center gap-1 text-[0.7rem] font-semibold ${
                  kpi.up ? 'text-emerald-600' : 'text-rose-500'
                }`}
              >
                {kpi.up ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        {!compact && (
          <>
            {/* Revenue bar chart */}
            <div className="rounded-xl border border-borderc bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-navy">รายได้รายเดือน</p>
                <span className="flex items-center gap-1 text-xs font-medium text-accent">
                  ดูรายงาน <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
              <BarChart
                data={[62, 74, 68, 85, 79, 96]}
                labels={['ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.']}
                className="w-full"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Cash flow line */}
              <div className="rounded-xl border border-borderc bg-white p-4">
                <p className="text-sm font-semibold text-navy">กระแสเงินสด</p>
                <LineChart data={[40, 52, 48, 61, 58, 72, 80]} className="mt-3 w-full" />
              </div>
              {/* Expense donut */}
              <div className="rounded-xl border border-borderc bg-white p-4">
                <p className="mb-2 text-sm font-semibold text-navy">สัดส่วนค่าใช้จ่าย</p>
                <div className="flex items-center gap-3">
                  <DonutChart
                    segments={[
                      { value: 42, color: '#155EEF' },
                      { value: 28, color: '#35C2D8' },
                      { value: 18, color: '#20B8A5' },
                      { value: 12, color: '#D7A84A' },
                    ]}
                    className="h-20 w-20 shrink-0"
                  />
                  <ul className="space-y-1">
                    {expenses.map((e) => (
                      <li key={e.label} className="flex items-center gap-1.5 text-[0.7rem] text-muted">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: e.color }}
                        />
                        {e.label}
                        <span className="font-semibold text-navy">{e.pct}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
