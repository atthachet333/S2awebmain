import { renderBrandImage } from '@/lib/brandImage';

export const alt = 'S2 Accounting Consultant: business advisory built on accurate accounting and tax';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return renderBrandImage();
}
