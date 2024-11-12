import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        slate900: '#0F172A',
        slate800: '#1E293B',
        slate500: '#64748B',
        slate400: '#94A3B8',
        slate300: '#CBD5E1',
        slate200: '#E2E8F0',
        slate100: '#F1F5F9',

        violet600: '#7C3AED',
        violet100: '#EDE9FE',
        rose500: '#F43F5E',
        rose300: '#BEF264',
        amber800: '#92400E',
      },
      fontFamily: {
        NanumSquareB: 'var(--font-NanumSquareB)',
        NanumSquareR: 'var(--font-NanumSquareR)',
      },
    },
  },
  plugins: [],
} satisfies Config;
