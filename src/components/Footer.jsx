import { Linkedin, Github, Mail } from 'lucide-react'
import { personal, navLinks } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border [html.light_&]:border-slate-200">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink [html.light_&]:text-slate-900">
            {personal.fullName}
          </p>
          <p className="mt-1 text-xs text-ink-dim">{personal.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent-soft [html.light_&]:hover:text-accent-deep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={`mailto:${personal.email}`} aria-label="Email" className="text-ink-dim hover:text-accent-soft">
            <Mail size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-dim hover:text-accent-soft"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-dim hover:text-accent-soft"
          >
            <Github size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-surface-border py-5 [html.light_&]:border-slate-200">
        <p className="container-page text-center text-xs text-ink-dim">
          &copy; {year} {personal.fullName}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
