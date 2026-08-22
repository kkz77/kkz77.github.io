import Section from './Section.jsx'
import { achievements, languages } from '../data/profile.js'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {achievements.map((a, i) => (
            <div key={i} className="rounded-xl border border-line bg-panel p-5">
              <p className="font-semibold text-heading">🏆 {a.title}</p>
              <p className="mt-1 text-sm text-muted">{a.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-panel p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Languages
          </h3>
          <ul className="space-y-2">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between text-body">
                <span>{l.name}</span>
                <span className="text-sm text-faint">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
