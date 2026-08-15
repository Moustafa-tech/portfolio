import ModalShell from './ModalShell'
import { ExternalLink, Play, Images, Github, Linkedin } from 'lucide-react'

export default function ProjectModal({ project, onClose, onOpenGallery, onOpenVideo }) {
  const { links } = project

  return (
    <ModalShell title={project.name} onClose={onClose}>
      <div className="space-y-6 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag-pill" data-active="true">
            {project.category}
          </span>
          <span className="text-sm text-ink-dim">{project.type}</span>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{project.description}</p>

        {project.kpis?.length > 0 && (
          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-dim">Key insights</h4>
            <div className="flex flex-wrap gap-2">
              {project.kpis.map((k) => (
                <span key={k.label} className="kpi-chip">
                  {k.label}
                  {k.value ? `: ${k.value}` : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.kpiFocus?.length > 0 && (
          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-dim">KPI focus</h4>
            <div className="flex flex-wrap gap-2">
              {project.kpiFocus.map((k) => (
                <span
                  key={k}
                  className="rounded-md border border-surface-border px-2.5 py-1 text-xs text-ink-muted [html.light_&]:border-slate-200"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.scopeStats?.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {project.scopeStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-accent-soft [html.light_&]:text-accent-deep">
                  {s.value}
                </p>
                <p className="text-xs text-ink-dim">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {project.analysisPoints?.length > 0 && (
          <div>
            <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-dim">
              Analysis &amp; techniques
            </h4>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {project.analysisPoints.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-dim">Tools</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-surface-border pt-5 [html.light_&]:border-slate-200">
          {links.powerbi && (
            <a href={links.powerbi} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Power BI Dashboard
              <ExternalLink size={15} />
            </a>
          )}
          {links.video && (
            <button type="button" onClick={onOpenVideo} className="btn-secondary">
              <Play size={15} />
              Watch Walkthrough
            </button>
          )}
          {project.images?.gallery?.length > 0 && (
            <button type="button" onClick={onOpenGallery} className="btn-secondary">
              <Images size={15} />
              View Images
            </button>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={15} />
              GitHub
            </a>
          )}
          {links.linkedinPost && (
            <a href={links.linkedinPost} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Linkedin size={15} />
              LinkedIn post
            </a>
          )}
        </div>
      </div>
    </ModalShell>
  )
}
