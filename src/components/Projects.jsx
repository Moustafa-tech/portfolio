import { useMemo, useState } from 'react'
import { filters, featuredProjects, additionalProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import AdditionalProjectCard from './AdditionalProjectCard'
import ProjectModal from './ProjectModal'
import ImageLightbox from './ImageLightbox'
import VideoModal from './VideoModal'
import Reveal from './Reveal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [detailsProject, setDetailsProject] = useState(null)
  const [galleryState, setGalleryState] = useState(null) // { project, startIndex }
  const [videoProject, setVideoProject] = useState(null)

  const sortedFeatured = useMemo(
    () => [...featuredProjects].sort((a, b) => a.order - b.order),
    []
  )

  const visibleFeatured =
    activeFilter === 'All' ? sortedFeatured : sortedFeatured.filter((p) => p.category === activeFilter)

  const visibleAdditional =
    activeFilter === 'All' ? additionalProjects : additionalProjects.filter((p) => p.category === activeFilter)

  const noResults = visibleFeatured.length === 0 && visibleAdditional.length === 0

  return (
    <section id="projects" className="container-page py-24">
      <Reveal>
        <span className="section-eyebrow">Featured Projects</span>
        <h2 className="section-title">Dashboards and analysis I&rsquo;ve built</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Real Power BI, Excel, and Python projects — from contact center performance to inventory
          analytics and survey data quality.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tool">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              data-active={activeFilter === f}
              className="tag-pill"
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {noResults && (
        <p className="mt-10 text-sm text-ink-dim">No projects match this filter yet.</p>
      )}

      <div className="mt-10 space-y-7">
        {visibleFeatured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpenDetails={() => setDetailsProject(project)}
            onOpenGallery={(startIndex) => setGalleryState({ project, startIndex })}
            onOpenVideo={() => setVideoProject(project)}
          />
        ))}
      </div>

      {visibleAdditional.length > 0 && (
        <div className="mt-16">
          <Reveal>
            <span className="section-eyebrow">Additional Projects</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink [html.light_&]:text-slate-900">
              More project work
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {visibleAdditional.map((project, i) => (
              <AdditionalProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      )}

      {detailsProject && (
        <ProjectModal
          project={detailsProject}
          onClose={() => setDetailsProject(null)}
          onOpenGallery={() => {
            setGalleryState({ project: detailsProject, startIndex: 0 })
            setDetailsProject(null)
          }}
          onOpenVideo={() => {
            setVideoProject(detailsProject)
            setDetailsProject(null)
          }}
        />
      )}

      {galleryState && (
        <ImageLightbox
          title={galleryState.project.name}
          images={[galleryState.project.images.cover, ...galleryState.project.images.gallery]}
          startIndex={galleryState.startIndex}
          onClose={() => setGalleryState(null)}
        />
      )}

      {videoProject && (
        <VideoModal
          title={videoProject.name}
          videoUrl={videoProject.links.video}
          onClose={() => setVideoProject(null)}
        />
      )}
    </section>
  )
}
