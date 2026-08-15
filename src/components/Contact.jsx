import { Mail, Linkedin, Github, MessageCircle, Download } from 'lucide-react'
import { personal, whatsappLink } from '../data/portfolio'
import Reveal from './Reveal'

const contactMethods = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'View my repositories',
    href: personal.github,
    icon: Github,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="container-page py-24">
      <Reveal>
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let&rsquo;s talk about an opportunity</h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Open to Junior Data Analyst / Data Analyst roles. Feel free to reach out or download my CV.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="card flex h-full flex-col gap-3 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <c.icon size={17} />
              </span>
              <div>
                <p className="text-xs text-ink-dim">{c.label}</p>
                <p className="mt-0.5 truncate text-sm font-medium text-ink [html.light_&]:text-slate-900">
                  {c.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          {whatsappLink ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex h-full flex-col gap-3 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-teal/10 text-signal-teal">
                <MessageCircle size={17} />
              </span>
              <div>
                <p className="text-xs text-ink-dim">WhatsApp</p>
                <p className="mt-0.5 text-sm font-medium text-ink [html.light_&]:text-slate-900">Chat on WhatsApp</p>
              </div>
            </a>
          ) : (
            <div className="card flex h-full flex-col gap-3 p-5 opacity-60">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-raised text-ink-dim">
                <MessageCircle size={17} />
              </span>
              <div>
                <p className="text-xs text-ink-dim">WhatsApp</p>
                <p className="mt-0.5 text-sm text-ink-dim">Add your number in src/data/portfolio.js</p>
              </div>
            </div>
          )}
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <a href={personal.cvPath} download className="btn-primary mt-10">
          <Download size={16} />
          Download CV
        </a>
      </Reveal>
    </section>
  )
}
