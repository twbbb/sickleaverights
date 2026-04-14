import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F2C23',
          soft: '#1A3D32',
          muted: '#2A4D42',
        },
        cream: {
          DEFAULT: '#FAFAF5',
          dark: '#F0EFE7',
        },
        gold: {
          DEFAULT: '#E5A823',
          soft: '#F5D76E',
          muted: '#D4993A',
        },
        sage: {
          DEFAULT: '#7B9E87',
          light: '#C5D5C5',
          dark: '#5A7B63',
        },
        coral: '#D4654A',
        slate: '#6B7B75',
        paper: '#FFFEF8',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 16px -4px rgba(15,44,35,0.08)',
        'card-hover': '0 20px 40px -12px rgba(15,44,35,0.15)',
        'gold': '0 4px 24px -4px rgba(229,168,35,0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
