import { experience, education } from '../data/experience'
import Reveal from './Reveal'

const weightStyles = {
  primary: 'card p-6 sm:p-7',
  secondary: 'card p-5 sm:p-6',
  compact: 'rounded-xl border border-surface-border p-4 text-sm [html.light_&]:border-slate-200',
}

export default function Experience() {
  return (
    <section id="experience" className="container-page py-24">
      <Reveal>
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where the skills came from</h2>
      </Reveal>

      <div className="mt-10 space-y-5">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.06}>
            <div className={weightStyles[job.weight]}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  className={`font-display font-semibold text-ink [html.light_&]:text-slate-900 ${
                    job.weight === 'compact' ? 'text-sm' : job.weight === 'secondary' ? 'text-base' : 'text-lg'
                  }`}
                >
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-ink-dim">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-accent-soft [html.light_&]:text-accent-deep">{job.org}</p>

              {job.weight === 'compact' ? (
                <p className="mt-2 text-ink-dim">{job.points[0]}</p>
              ) : (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14">
          <span className="section-eyebrow">Education</span>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-ink [html.light_&]:text-slate-900">
              {education.degree}
            </h3>
            <span className="text-sm text-ink-muted">{education.institution}</span>
            <span className="font-mono text-xs text-ink-dim">{education.year}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
