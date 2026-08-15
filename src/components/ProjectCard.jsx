import { ExternalLink, Play, Images, Github } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

export default function ProjectCard({ project, index, onOpenDetails, onOpenGallery, onOpenVideo }) {
  const { links } = project

  return (
    <Reveal delay={index * 0.06} className="card group overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <button
          type="button"
          onClick={() => onOpenGallery(0)}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-canvas-soft text-left lg:aspect-auto"
          aria-label={`View screenshots for ${project.name}`}
        >
          <ImageWithFallback
            src={project.images.cover}
            alt={`${project.name} — dashboard cover screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            label="Add a cover screenshot to this project's images folder"
          />
          <span className="absolute left-3 top-3 rounded-md bg-canvas/80 px-2.5 py-1 font-mono text-[11px] text-ink-muted backdrop-blur">
            0{project.order}
          </span>
        </button>

        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag-pill" data-active="true">
              {project.category}
            </span>
            <span className="text-xs text-ink-dim">{project.type}</span>
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl [html.light_&]:text-slate-900">
            {project.name}
          </h3>
          {project.altName && <p className="mt-0.5 text-xs text-ink-dim">Also referred to as: {project.altName}</p>}

          <p className="mt-3 text-sm leading-relaxed text-ink-muted line-clamp-3">{project.description}</p>

          {project.kpis?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.kpis.map((k) => (
                <span key={k.label} className="kpi-chip">
                  {k.label}
                  {k.value ? `: ${k.value}` : ''}
                </span>
              ))}
            </div>
          )}

          {project.scopeStats?.length > 0 && (
            <div className="mt-4 flex gap-6">
              {project.scopeStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-xl font-semibold text-accent-soft [html.light_&]:text-accent-deep">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-ink-dim">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-md border border-surface-border px-2 py-0.5 text-[11px] text-ink-dim [html.light_&]:border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {links.powerbi && (
              <a href={links.powerbi} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Dashboard
                <ExternalLink size={14} />
              </a>
            )}
            {links.video && (
              <button type="button" onClick={onOpenVideo} className="btn-secondary">
                <Play size={14} />
                Watch Walkthrough
              </button>
            )}
            {links.imagesOnly && (
              <button type="button" onClick={() => onOpenGallery(0)} className="btn-secondary">
                <Images size={14} />
                View Images
              </button>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={14} />
                GitHub
              </a>
            )}
            <button type="button" onClick={onOpenDetails} className="btn-ghost">
              View details
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
