import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  )
}
