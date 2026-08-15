import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function AdditionalProjectCard({ project, index }) {
  const { links } = project

  return (
    <Reveal delay={index * 0.06} className="card flex h-full flex-col overflow-hidden">
      {/* Project Image */}
      {project.image && (
        <div className="h-48 w-full overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="tag-pill">{project.category}</span>
          <ArrowUpRight size={15} className="text-ink-dim" />
        </div>

        <h4 className="mt-3 font-display text-base font-semibold text-ink [html.light_&]:text-slate-900">
          {project.name}
        </h4>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

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

        <div className="mt-5 flex flex-wrap gap-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <Github size={13} />
              GitHub
            </a>
          )}

          {links.linkedinPost && (
            <a
              href={links.linkedinPost}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
            >
              <Linkedin size={13} />
              LinkedIn post
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}