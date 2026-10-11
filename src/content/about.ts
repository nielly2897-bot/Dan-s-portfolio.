import type { Image, ToolMark } from './schema'
import { site } from './site'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I bring four years of industry experience to GoHighLevel websites and automation, social media marketing, and content strategy.',
  lead: 'I work with local community churches, financial traders, wellness coaches, real estate firms, and SaaS agency owners.',
  leadQuiet: 'I connect websites, lead nurturing, and content workflows so clients can spend more time on the people they serve.',
  workStyle: 'I work best with clear goals, written expectations, and a practical plan. I bring careful attention to detail and steady follow-through, check the facts before making decisions, and look for ways to make systems more reliable. I value meaningful creative work and results that make good use of your time and resources.',
  note: `${site.brand} brings my work in automation, website development, and content strategy together under one brand.`,
  picture: {
    src: '/images/profile/daniel-studio-ai.png',
    alt: `AI-assisted studio portrait of ${site.name}, based on his own photographs`,
    width: 1122,
    height: 1402,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'GHL Automation & Lead Nurturing', tools: [] },
  { title: 'GHL Website Development', tools: [] },
  { title: 'SMM Content Strategy', tools: [] },
  { title: 'Content Repurposing', tools: [] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'place', title: 'Four years of industry experience', detail: 'Websites · Automation · Content' },
  { id: 'cert', title: 'DTI registration (PDF)', detail: 'Socinex Digital Marketing Services · Registered February 16, 2026', href: '/documents/socinex-dti-registration.pdf' },
]
