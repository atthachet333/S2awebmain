'use client';

import { motion } from 'framer-motion';

interface BarChartProps {
  data: number[];
  labels?: string[];
  className?: string;
}

/** Lightweight animated bar chart rendered as inline SVG (no chart library). */
export function BarChart({ data, labels, className }: BarChartProps) {
  const max = Math.max(...data);
  const width = 320;
  const height = 120;
  const gap = 12;
  const barWidth = (width - gap * (data.length - 1)) / data.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height + 22}`}
      className={className}
      role="img"
      aria-label="กราฟแสดงผลประกอบการรายเดือน"
    >
      {data.map((value, i) => {
        const barHeight = (value / max) * height;
        const x = i * (barWidth + gap);
        const y = height - barHeight;
        const isLast = i === data.length - 1;
        return (
          <g key={i}>
            <motion.rect
              x={x}
              width={barWidth}
              rx={5}
              initial={{ height: 0, y: height }}
              whileInView={{ height: barHeight, y }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              fill={isLast ? '#155EEF' : '#DCEAFF'}
            />
            {labels?.[i] && (
              <text
                x={x + barWidth / 2}
                y={height + 16}
                textAnchor="middle"
                className="fill-muted"
                style={{ fontSize: 9 }}
              >
                {labels[i]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

interface LineChartProps {
  data: number[];
  className?: string;
}

/** Animated line/area chart as inline SVG. */
export function LineChart({ data, className }: LineChartProps) {
  const width = 320;
  const height = 100;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 16) - 8;
    return [x, y] as const;
  });
  const line = points.map((p) => `${p[0]},${p[1]}`).join(' ');
  const area = `0,${height} ${line} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="กราฟแนวโน้มกระแสเงินสด"
    >
      <defs>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#35C2D8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#35C2D8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#lineFill)" />
      <motion.polyline
        points={line}
        fill="none"
        stroke="#35C2D8"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === points.length - 1 ? 4 : 2.5} fill="#35C2D8" />
      ))}
    </svg>
  );
}

interface DonutProps {
  segments: { value: number; color: string }[];
  className?: string;
}

export function DonutChart({ segments, className }: DonutProps) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg viewBox="0 0 110 110" className={className} role="img" aria-label="สัดส่วนค่าใช้จ่าย">
      <circle cx="55" cy="55" r={radius} fill="none" stroke="#EEF5FF" strokeWidth="12" />
      {segments.map((seg, i) => {
        const dash = (seg.value / total) * circumference;
        const el = (
          <motion.circle
            key={i}
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 55 55)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}
