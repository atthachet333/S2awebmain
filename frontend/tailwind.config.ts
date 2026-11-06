import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071C4A',
          dark: '#041333',
        },
        primary: {
          DEFAULT: '#155EEF',
          50: '#EEF6FF',
          100: '#DCEAFF',
          600: '#155EEF',
          700: '#0E3A8A',
        },
        // Royal Blue — ปุ่มหลักและลิงก์
        accent: {
          DEFAULT: '#155EEF',
          light: '#4EA8FF',
        },
        royal: '#155EEF',
        sky: '#4EA8FF',
        cyan: {
          DEFAULT: '#35C2D8',
          soft: '#D6F3F8',
        },
        teal: {
          DEFAULT: '#20B8A5',
          soft: '#D2F1EC',
        },
        lightblue: '#EEF6FF',
        iceblue: '#F4FAFF',
        borderc: '#DDE6F3',
        ink: '#13213C',
        muted: '#64748B',
        gold: {
          DEFAULT: '#D7A84A',
          soft: '#F0DEB0',
        },
      },
      fontFamily: {
        sans: ['var(--font-plex-thai)', 'var(--font-inter)', 'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', 'system-ui', 'sans-serif'],
        display: ['var(--font-plex-thai)', 'var(--font-inter)', 'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.25rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
      },
      maxWidth: {
        container: '1280px',
        'container-wide': '1440px',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,28,74,0.04), 0 4px 16px rgba(7,28,74,0.06)',
        card: '0 2px 8px rgba(7,28,74,0.05), 0 12px 32px rgba(7,28,74,0.08)',
        lift: '0 12px 24px rgba(7,28,74,0.10), 0 24px 48px rgba(7,28,74,0.12)',
        glow: '0 10px 30px -8px rgba(21,94,239,0.45)',
        'glow-cyan': '0 10px 30px -8px rgba(53,194,216,0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(221,230,243,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(221,230,243,0.6) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(900px 480px at 82% -8%, rgba(78,168,255,0.22), transparent 60%), radial-gradient(680px 420px at 2% 8%, rgba(53,194,216,0.14), transparent 58%), radial-gradient(600px 400px at 55% 110%, rgba(21,94,239,0.10), transparent 60%)',
        'brand-gradient': 'linear-gradient(120deg, #155EEF 0%, #2C7BF0 45%, #35C2D8 100%)',
        'brand-gradient-teal': 'linear-gradient(120deg, #155EEF 0%, #20B8A5 100%)',
        'navy-gradient': 'linear-gradient(160deg, #071C4A 0%, #041333 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
