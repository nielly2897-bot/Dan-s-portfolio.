import type { WorkChapter } from './schema'
import { method } from './method'
import { portfolioChapters } from './portfolio'
/**
 * Home page copy. The hero pairs a thin line with a bold one. The bold line is sized in `cqi` in
 * features/home/hero/hero.css so it fills the column: re-measure it when you change the words
 * (see the comment on `.hero__title` there).
 */
export const homeHero = {
  headlineThin: 'Build. Connect.',
  headlineBold: 'Grow with purpose.',
  subhead: 'Four years of experience connecting websites, automation, and content to help businesses and communities grow.',
  cta: { label: 'Get in touch', to: '/#contact' },
}

/**
 * The statement under the hero: words light up as the page scrolls, each keyword lands bold and
 * moves the tracker. Replace the words, keep four keywords (the tracker shows them in order).
 * A string is plain words; `{ key }` is a keyword.
 */
export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'I help you',
    { key: 'connect' },
    'with the right people,',
    { key: 'build' },
    'a website that serves them,',
    { key: 'automate' },
    'the follow-up, and',
    { key: 'repurpose' },
    'your ideas into content that keeps the conversation going.',
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Websites, workflows, and content in action.',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'What I run for clients today.',
  },
  objections: {
    eyebrow: 'Before you write',
    title: 'The three questions everyone asks.',
  },
}

export const ctaBand = {
  title: 'Tell me what is eating your week.',
  body: 'Tell me where your website, follow-up, or content workflow gets stuck. We can find a practical next step together.',
  button: 'Tell me about your project',
}

export const chapterPath = (id: string) => `/work/${id}`
export const workChapters: WorkChapter[] = portfolioChapters
export const workSection = {...homeSections.work,titleThin:'Real work.',titleBold:'Ready to explore.',all:{label:'Explore selected work',to:'/work'}}
export const findChapter = (id: string | undefined) => workChapters.find(c=>c.id===id)
