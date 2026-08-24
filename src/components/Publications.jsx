import Section from './Section.jsx'
import { publications, profile } from '../data/profile.js'

// Highlight the site owner's name wherever it appears in the author list.
function renderAuthors(authors, myName) {
  const parts = authors.split(new RegExp(`(${myName})`, 'g'))
  return parts.map((part, i) =>
    part === myName ? (
      <span key={i} className="font-semibold text-heading">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function Publications() {
  if (!publications || publications.length === 0) return null

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-5">
        {publications.map((p, i) => {
          const Inner = (
            <div className="rounded-xl border border-line bg-panel p-5 transition group-hover:border-accent/50">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-heading">{p.title}</h3>
                {p.status && (
                  <span className="shrink-0 rounded-full bg-accentSoft px-3 py-1 text-xs font-medium text-accentSoftText">
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {renderAuthors(p.authors, profile.name)}
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="italic">{p.venue}</span>
                {p.year ? `, ${p.year}` : ''}
              </p>
              {p.url && (
                <p className="mt-3 text-sm font-medium text-accent">
                  Read the paper <span className="inline-block transition group-hover:translate-x-0.5">→</span>
                </p>
              )}
            </div>
          )

          return p.url ? (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
              aria-label={`${p.title} (opens the paper)`}
            >
              {Inner}
            </a>
          ) : (
            <div key={i} className="group">
              {Inner}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
