/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        accent: '#10B981',
        secondary: '#6B7280',
        'accent-light': '#D1FAE5',
        'warning-bg': '#FFFBEB',
        'warning-text': '#92400E',
        'error-bg': '#FEF2F2',
        'error-text': '#991B1B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
