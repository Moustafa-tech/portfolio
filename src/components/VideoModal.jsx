import ModalShell from './ModalShell'
import { ExternalLink } from 'lucide-react'

function toDrivePreviewUrl(driveUrl) {
  const match = driveUrl.match(/\/d\/([^/]+)/)
  if (!match) return null
  return `https://drive.google.com/file/d/${match[1]}/preview`
}

export default function VideoModal({ title, videoUrl, onClose }) {
  const previewUrl = toDrivePreviewUrl(videoUrl)

  return (
    <ModalShell title={`${title} — Walkthrough`} onClose={onClose}>
      <div className="aspect-video w-full bg-black">
        {previewUrl ? (
          <iframe
            src={previewUrl}
            title={`${title} project walkthrough video`}
            className="h-full w-full"
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-ink-muted">
            Video preview unavailable.
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm">
        <p className="text-ink-dim">Screen-recorded walkthrough, narrated by Mostafa.</p>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 font-medium text-accent-soft hover:text-accent [html.light_&]:text-accent-deep"
        >
          Open in Google Drive
          <ExternalLink size={14} />
        </a>
      </div>
    </ModalShell>
  )
}
