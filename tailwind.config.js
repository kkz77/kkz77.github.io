/** @type {import('tailwindcss').Config} */
const withAlpha = (v) => `rgb(var(${v}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme tokens (switch automatically via [data-theme])
        bg: withAlpha('--c-bg'),
        panel: withAlpha('--c-panel'),
        panelHover: withAlpha('--c-panel-hover'),
        line: withAlpha('--c-line'),
        heading: withAlpha('--c-heading'),
        body: withAlpha('--c-body'),
        muted: withAlpha('--c-muted'),
        faint: withAlpha('--c-faint'),
        accent: withAlpha('--c-accent'),
        accentBtn: withAlpha('--c-accent-btn'),
        accentBtnHover: withAlpha('--c-accent-btn-hover'),
        onAccent: withAlpha('--c-on-accent'),
        accentSoft: withAlpha('--c-accent-soft'),
        accentSoftText: withAlpha('--c-accent-soft-text'),
        chip: withAlpha('--c-chip'),
      },
    },
  },
  plugins: [],
}
