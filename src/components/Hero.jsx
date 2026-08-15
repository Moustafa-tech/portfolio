import { useState } from 'react'
import { ArrowDown, Download, Github, Linkedin, FileText } from 'lucide-react'
import { personal } from '../data/portfolio'
import Reveal from './Reveal'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="bg-dashboard-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="section-eyebrow">Data Analyst Portfolio</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl [html.light_&]:text-slate-900">
              {personal.fullName}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-accent-soft sm:text-base [html.light_&]:text-accent-deep">
              {personal.headline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {personal.heroSummary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View My Projects
                <ArrowDown size={16} />
              </a>
              <a href={personal.cvPath} download className="btn-secondary">
                <Download size={16} />
                Download CV
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="btn-ghost"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="btn-ghost"
              >
                <Github size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="card relative aspect-square w-full overflow-hidden rounded-2xl">
              {!imgError ? (
                <img
                  src={personal.profileImage}
                  alt={`Portrait of ${personal.fullName}`}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-raised to-canvas-soft text-ink-muted">
                  <span className="font-display text-5xl font-semibold text-accent-soft">
                    {initials(personal.fullName)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs">
                    <FileText size={13} />
                    Add profile.jpg in /public/images/profile/
                  </span>
                </div>
              )}
            </div>

            <div className="card absolute -bottom-5 -left-5 hidden items-center gap-2 px-4 py-2.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-signal-teal" />
              <span className="font-mono text-xs text-ink-muted">Power BI &middot; SQL &middot; Excel &middot; Python</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
