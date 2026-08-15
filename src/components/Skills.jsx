import { coreSkills, additionalSkills } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="container-page py-24">
      <Reveal>
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Tools I use to turn data into decisions</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Power BI and Excel are central to my day-to-day work. SQL and Python are practical,
          foundational skills I apply for data extraction, cleaning, and analysis.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {coreSkills.map((skill, i) => (
          <Reveal key={skill.id} delay={i * 0.06}>
            <div className="card h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink [html.light_&]:text-slate-900">
                  {skill.name}
                </h3>
                <span
                  className={`kpi-chip whitespace-nowrap ${
                    skill.tier === 'Core' ? 'border-accent/40 text-accent-soft [html.light_&]:text-accent-deep' : ''
                  }`}
                >
                  {skill.tier}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">{skill.tagline}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {skill.capabilities.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-surface-border bg-canvas-soft px-2.5 py-1 text-xs text-ink-muted [html.light_&]:border-slate-200 [html.light_&]:bg-slate-50"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center gap-2 rounded-xl border border-surface-border bg-surface/60 p-5 [html.light_&]:border-slate-200 [html.light_&]:bg-white">
          <span className="mr-2 font-mono text-xs uppercase tracking-wide text-ink-dim">Also familiar with</span>
          {additionalSkills.map((s) => (
            <span key={s} className="tag-pill">
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
