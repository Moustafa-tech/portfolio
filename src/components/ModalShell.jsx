import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ModalShell({ title, onClose, children }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="card relative w-full max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-surface-border px-5 py-3.5 [html.light_&]:border-slate-200">
          <h3 className="truncate pr-4 font-display text-sm font-semibold text-ink [html.light_&]:text-slate-900">
            {title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted hover:bg-surface-raised hover:text-ink [html.light_&]:hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
