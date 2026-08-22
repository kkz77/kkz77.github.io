import Section from './Section.jsx'
import { about, education } from '../data/profile.js'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {about.map((p, i) => (
            <p key={i} className="leading-relaxed text-body">
              {p}
            </p>
          ))}
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((e, i) => (
              <div key={i} className="border-l-2 border-accent/40 pl-4">
                <p className="font-semibold text-heading">{e.degree}</p>
                <p className="text-sm text-body">{e.school}</p>
                <p className="mt-1 text-xs text-faint">
                  {e.period} · {e.location}
                </p>
                {e.detail && <p className="mt-1 text-xs text-accent">{e.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
