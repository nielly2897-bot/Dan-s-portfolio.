import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { introVideo } from '@/content/portfolio'
import './showcase.css'
function Intro({nested=false}:{nested?:boolean}) { return <><PageHeader level={nested?2:1} id="showcase-title" eyebrow="Meet Daniel" titleThin="The person" titleBold="behind Socinex." lede="Based in Cavite, Philippines. I bring four years of experience in websites, GoHighLevel automation, and content strategy to your next project."/><video className="socinex-intro" controls playsInline preload="none" poster="/images/portfolio/intro-poster.jpg" aria-label="Daniel Torres introduction video" src={introVideo}/></> }
export function ShowcasePage({page}:{page:PageRoute}) {return <div className="pg kt"><PageMeta page={page}/><Intro/></div>}
export function ShowcaseSection() {return <section id="showcase" className="pg pg--section kt"><Intro nested/></section>}
