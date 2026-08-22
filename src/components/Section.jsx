export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          <span className="text-accent">#</span> {title}
        </h2>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
