import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export default function ImageWithFallback({ src, alt, className = '', label }) {
  const [errored, setErrored] = useState(false)

  if (errored || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface-raised to-canvas-soft text-ink-dim [html.light_&]:from-slate-100 [html.light_&]:to-slate-50 ${className}`}
      >
        <ImageOff size={22} strokeWidth={1.5} />
        <span className="px-4 text-center text-[11px] leading-snug">
          {label || 'Image not added yet'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  )
}
