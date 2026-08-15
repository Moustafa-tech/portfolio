import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ModalShell from './ModalShell'
import ImageWithFallback from './ImageWithFallback'

export default function ImageLightbox({ title, images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const hasMultiple = images.length > 1

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <ModalShell title={title} onClose={onClose}>
      <div className="relative bg-canvas-soft">
        <ImageWithFallback
          src={images[index]}
          alt={`${title} — screenshot ${index + 1} of ${images.length}`}
          className="h-[55vh] w-full object-contain"
          label="Add this screenshot to the project's images folder"
        />
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 text-ink hover:bg-canvas"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 text-ink hover:bg-canvas"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      {hasMultiple && (
        <div className="flex items-center justify-center gap-1.5 py-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-accent' : 'w-1.5 bg-surface-border'
              }`}
            />
          ))}
        </div>
      )}
    </ModalShell>
  )
}
