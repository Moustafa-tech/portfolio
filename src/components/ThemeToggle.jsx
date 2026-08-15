import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors
                 border-surface-border bg-surface-raised text-ink-muted hover:text-accent-soft
                 [html.light_&]:border-slate-300 [html.light_&]:bg-white [html.light_&]:text-slate-500
                 [html.light_&]:hover:text-accent-deep"
    >
      {isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
    </button>
  )
}
