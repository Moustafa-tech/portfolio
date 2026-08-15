import { aboutStory } from '../data/portfolio'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="container-page py-24">
      <Reveal>
        <span className="section-eyebrow">{aboutStory.eyebrow}</span>
        <h2 className="section-title">A practical path into data analytics</h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {aboutStory.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-dim">
              {aboutStory.careerPath.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-md border border-surface-border bg-surface px-3 py-1.5 text-ink-muted [html.light_&]:border-slate-200 [html.light_&]:bg-white">
                    {step}
                  </span>
                  {i < aboutStory.careerPath.length - 1 && <span className="text-accent">&rarr;</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card space-y-4 p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-muted">
              What that experience built
            </h3>
            <ul className="space-y-4">
              {aboutStory.highlights.map((h) => (
                <li key={h.label} className="border-l-2 border-accent/40 pl-4">
                  <p className="text-sm font-medium text-ink">{h.label}</p>
                  <p className="mt-0.5 text-sm text-ink-dim">{h.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
