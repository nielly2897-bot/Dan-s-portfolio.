import { Link } from 'react-router'
import { chapterPath, workChapters, workSection } from '@/content/home'
import { recentWebsites } from '@/content/portfolio'
import type { Image, WorkChapter } from '@/content/schema'
import './work.css'

/** Tiles are lazy, so Chrome reads their real width (`auto`); the fallback is the largest tile's share
 *  of the screen (measured: ~37vw from 1280 up, ~62vw at 1024, ~85vw on phones). */
function collageImages(chapter: WorkChapter): { id: string; image: Image }[] {
  if (chapter.id === 'websites') return recentWebsites.map(project => ({id:project.id,image:project.image}))
  return chapter.items.flatMap(item => item.image ? [{id:item.id,image:item.image}] : item.videoPoster ? [{id:item.id,image:{src:item.videoPoster,alt:item.name,width:1280,height:720}}] : [])
}

/**
 * Work: a bento of the eight chapters. Every chapter on one screen as tiles of different sizes, the biggest
 * chapters largest (grid areas in work.css, keyed by chapter id); the tile is "A Clean frame". Nothing
 * holds: tiles rise in as they scroll into view. Every tile is a real link to /work/<chapter>, which opens that chapter's sheet over Home.
 */
export function WorkSection() {
  return (
    <section id="work" className="wk wb" aria-labelledby="work-title">
      <header className="wb__head">
        <p className="wk-eyebrow">{workSection.eyebrow}</p>
        <h2 id="work-title" className="wk-title">
          <span className="wk-title__thin">{workSection.titleThin}</span> <span className="wk-title__bold">{workSection.titleBold}</span>
        </h2>
      </header>
      <div className="wb__recent" aria-label="Featured recent website work">
        {recentWebsites.map((project) => <article key={project.id} className="wb__project">
          <a className="wb__project-shot" href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full ${project.name} screenshot`}><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" /></a>
          <div className="wb__project-copy"><p className="wk-count">{project.kicker}</p><h3>{project.name}</h3><p>{project.summary}</p><a className="wb__project-link" href={project.href} target="_blank" rel="noopener noreferrer">Visit live website ↗</a><Link className="wb__project-link" to="/work/featured" state={{sheet:true}} preventScrollReset>Explore website work →</Link></div>
        </article>)}
      </div>
      <ul className="wb__grid">
        {workChapters.map((chapter) => {
          const pictures = collageImages(chapter)
          return (
            <li key={chapter.id} className="wb__cell" data-area={chapter.id}>
              <Link to={chapterPath(chapter.id)} state={{ sheet: true }} preventScrollReset className="wb__tile" data-kind="collage">
                <span className="wb__media wb__collage" data-count={pictures.length} aria-hidden>
                  {pictures.map(({id,image}) => <span key={id} className="wb__fragment" data-item={id}><img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" decoding="async" /></span>)}
                </span>
                <span className="wb__cap">
                  <b>{chapter.title}</b>
                  <span className="wk-count">
                    {chapter.count} {chapter.unit}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
