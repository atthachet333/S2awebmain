import { ImageResponse } from 'next/og';

export const brandImageSize = { width: 1200, height: 630 };
export const brandImageAlt = 'S2 Accounting Consultant: business advisory built on accurate accounting and tax';

/** EP40: link-sharing image (Open Graph / Twitter). English text, because the default font has no Thai glyphs. */
export function renderBrandImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(160deg, #071C4A 0%, #041333 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: '#155EEF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S2
          </div>
          <div style={{ fontSize: 30, color: '#DCEAFF' }}>S2 Accounting Consultant</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
            Business advisory built on accurate accounting and tax
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#4EA8FF' }}>
            Helping owners and executives understand their numbers, costs and profit
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#DCEAFF' }}>
          <span>Bangkok, Thailand</span>
          <span>s2aconsultant.com</span>
        </div>
      </div>
    ),
    brandImageSize,
  );
}
