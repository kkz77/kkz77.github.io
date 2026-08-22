import Section from './Section.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="I'm looking for my first role in AI/ML or software engineering, and I'm always happy to talk about research too. If you think we might be a good fit, or you just want to say hi, my inbox is open."
    >
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-accentBtn px-6 py-3 text-sm font-semibold text-onAccent transition hover:bg-accentBtnHover"
        >
          ✉ {profile.email}
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-body transition hover:bg-panelHover"
        >
          LinkedIn
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-body transition hover:bg-panelHover"
        >
          GitHub
        </a>
      </div>
    </Section>
  )
}
