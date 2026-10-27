import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto grid max-w-5xl items-center gap-12 fade-up md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-4 text-sm font-medium text-accent">👋 Hi, I'm</p>
          <h1 className="text-4xl font-extrabold leading-tight text-heading sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-body sm:text-2xl">{profile.role}</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accentBtn px-6 py-3 text-sm font-semibold text-onAccent transition hover:bg-accentBtnHover"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-body transition hover:bg-panelHover"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-body transition hover:bg-panelHover"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <span>📍 {profile.location}</span>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-heading">
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-heading">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-first mx-auto md:order-last">
          <div className="relative h-48 w-48 sm:h-56 sm:w-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(var(--c-grad-from))] to-[rgb(var(--c-grad-to))] opacity-40 blur-2xl" />
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative h-full w-full rounded-full object-cover object-[50%_32%] ring-4 ring-line"
              />
            ) : (
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--c-grad-from))] to-[rgb(var(--c-grad-to))] text-6xl font-extrabold text-white ring-4 ring-line">
                {profile.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
