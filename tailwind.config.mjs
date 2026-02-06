/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        night: 'rgb(var(--color-night) / <alpha-value>)',
        coal: 'rgb(var(--color-coal) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        steel: 'rgb(var(--color-steel) / <alpha-value>)',
        mist: 'rgb(var(--color-mist) / <alpha-value>)',
        ice: 'rgb(var(--color-ice) / <alpha-value>)',
        aqua: 'rgb(var(--color-aqua) / <alpha-value>)',
        lime: 'rgb(var(--color-lime) / <alpha-value>)',
        ember: 'rgb(var(--color-ember) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Sora"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Sora"', '"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(var(--color-aqua) / 0.25), 0 24px 80px rgba(var(--color-aqua) / 0.14)',
        panel: '0 14px 40px rgba(2, 10, 25, 0.35)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(900px circle at 8% -5%, rgba(var(--color-aqua) / 0.16), transparent 48%), radial-gradient(860px circle at 92% 0%, rgba(var(--color-lime) / 0.16), transparent 52%), radial-gradient(1200px circle at 50% 120%, rgba(var(--color-ember) / 0.08), transparent 65%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-64px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.2, 0.65, 0.2, 1) both',
        pulseSoft: 'pulseSoft 4.4s ease-in-out infinite',
        drift: 'drift 22s linear infinite',
      },
    },
  },
  plugins: [],
};
