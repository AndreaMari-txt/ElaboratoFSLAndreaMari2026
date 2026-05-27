/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c4',
          300: '#b0b0a0',
          400: '#888878',
          500: '#666656',
          600: '#4a4a3c',
          700: '#333328',
          800: '#1e1e16',
          900: '#0f0f0a',
          950: '#080806',
        },
        accent: {
          DEFAULT: '#e8e8e0',
          dim:     '#b8b8b0',
          muted:   '#f0f0e8',
        },
        surface: {
          DEFAULT: '#111110',
          raised:  '#191917',
          overlay: '#212120',
          border:  '#2a2a28',
        },
      },
    },
  },
  plugins: [],
}
