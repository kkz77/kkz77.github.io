import Section from './Section.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-line bg-chip px-3 py-1 text-sm text-body"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
