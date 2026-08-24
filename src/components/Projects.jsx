import Section from './Section.jsx'
import { projects } from '../data/profile.js'

function ProjectCard({ p }) {
  const hasLink = Boolean(p.link)

  // Whole card is a link when a repo URL exists; otherwise a plain container.
  const Wrapper = hasLink ? 'a' : 'div'
  const wrapperProps = hasLink
    ? { href: p.link, target: '_blank', rel: 'noreferrer', 'aria-label': `${p.title} on GitHub` }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition hover:border-accent/50 hover:bg-panelHover ${
        hasLink ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20' : ''
      } ${p.featured ? 'md:col-span-2' : ''}`}
    >
      {p.image && (
        <div className="relative aspect-[2/1] overflow-hidden border-b border-line">
          <img
            src={p.image}
            alt={`${p.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-accent">{p.tag}</p>
            <h3 className="mt-1 text-lg font-semibold text-heading">{p.title}</h3>
          </div>
          {hasLink && (
            <span className="shrink-0 text-sm text-muted transition group-hover:text-accent">
              Code ↗
            </span>
          )}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{p.description}</p>

        {p.result && (
          <p className="mt-3 rounded-lg bg-accentSoft px-3 py-2 text-sm font-medium text-accentSoftText">
            ▲ {p.result}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md bg-chip px-2 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        {hasLink && (
          <p className="mt-4 text-sm font-medium text-accent">
            View on GitHub <span className="transition group-hover:translate-x-0.5 inline-block">→</span>
          </p>
        )}

        {!hasLink && p.publicationHref && (
          <a
            href={p.publicationHref}
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            📄 See publication ↓
          </a>
        )}
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects & Research"
      subtitle="Selected work across NLP, deep reinforcement learning, applied AI, and embedded systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}
