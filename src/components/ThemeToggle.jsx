import { useEffect, useState } from 'react'

function getInitial() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light')
    } else {
      root.removeAttribute('data-theme')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  const isLight = theme === 'light'

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`rounded-lg border border-line px-3 py-1.5 text-sm text-body transition hover:bg-panelHover ${className}`}
    >
      {isLight ? '🌙' : '☀️'}
    </button>
  )
}
