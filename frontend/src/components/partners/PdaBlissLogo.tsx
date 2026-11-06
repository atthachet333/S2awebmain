import Image from 'next/image';
import { cn } from '@/lib/utils';
import { pdaBliss } from '@/data/partnership';

type Tone = 'auto' | 'onLight' | 'onDark';

interface PdaBlissLogoProps {
  /** full = โลโก้เต็ม (มีชื่อบริษัท) · mark = สัญลักษณ์ PDA ขนาดเล็ก */
  variant?: 'full' | 'mark';
  /**
   * auto    = สลับตามธีม (Light → โลโก้พื้นขาว, Dark → โลโก้สีเงินโปร่งใส)
   * onLight = วางบนพื้นสีขาวเสมอ
   * onDark  = วางบนพื้นสีเข้มเสมอ (เช่น การ์ดหัวสีกรมท่า)
   */
  tone?: Tone;
  /** กำหนดความสูงด้วย class เช่น h-20 — ความกว้างคำนวณอัตโนมัติ (คงสัดส่วนเดิม) */
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * โลโก้จริงของ PDA BLISS COMPANY LIMITED (ไฟล์จากเจ้าของแบรนด์)
 * ห้ามยืด บีบ เปลี่ยนสี หรือวาดใหม่ — ใช้ w-auto + object-contain เสมอ
 */
export function PdaBlissLogo({
  variant = 'full',
  tone = 'auto',
  className = 'h-20',
  sizes = '160px',
  priority = false,
}: PdaBlissLogoProps) {
  const alt = pdaBliss.legalName;

  if (variant === 'mark') {
    const { src, width, height } = pdaBliss.logo.mark;
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn('w-auto rounded-lg object-contain', className)}
      />
    );
  }

  const { light, dark } = pdaBliss.logo;
  const showLight = tone === 'auto' || tone === 'onLight';
  const showDark = tone === 'auto' || tone === 'onDark';

  return (
    <>
      {showLight && (
        <Image
          src={light.src}
          alt={alt}
          width={light.width}
          height={light.height}
          sizes={sizes}
          priority={priority}
          className={cn('w-auto object-contain', tone === 'auto' && 'dark:hidden', className)}
        />
      )}
      {showDark && (
        <Image
          src={dark.src}
          alt={alt}
          width={dark.width}
          height={dark.height}
          sizes={sizes}
          priority={priority}
          className={cn('w-auto object-contain', tone === 'auto' && 'hidden dark:block', className)}
        />
      )}
    </>
  );
}
