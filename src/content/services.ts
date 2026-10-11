import type { Service } from './schema'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Automation, websites, and content that work together.',
  lede: 'Choose focused support or connect all three services into a workflow built around your goals.',
}

export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Less busywork.',
  titleBold: 'More momentum.',
  explore: 'Explore',
  work: { 'service-1': 'screens', 'service-2': 'websites', 'service-3': 'process' } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Automation',
    thumbnail: { src: '/images/portfolio/lead.png', alt: 'Daniel’s GoHighLevel lead acquisition workflow', width: 1334, height: 815 },
    summary: 'Keep leads moving in GoHighLevel with connected workflows and consistent follow-up.',
    outcome: 'Connected follow-up',
    bullets: ['Lead acquisition workflows', 'Email nurturing campaigns', 'Automation maintenance and troubleshooting'],
    tools: [],
  },
  {
    id: 'service-2',
    title: 'Website Development',
    thumbnail: { src: '/images/portfolio/jumbo-website.png', alt: 'Daniel’s Jumbo Loan Experts website work', width: 1794, height: 8509 },
    summary: 'Build a clear, purposeful online home for your business or community.',
    outcome: 'A stronger presence',
    bullets: ['Custom websites built from scratch', 'Website rebuilding and redesign', 'Ongoing website maintenance'],
    tools: [],
  },
  {
    id: 'service-3',
    title: 'Content Repurposing',
    thumbnail: { src: '/images/portfolio/nicole-wide.png', alt: 'Scale Up Your Business podcast episode artwork created by Daniel', width: 1200, height: 628 },
    summary: 'Turn recorded videos into content that reaches people across channels.',
    outcome: 'One recording, more reach',
    bullets: ['Video recording, graphic design, and short-form video content', 'Email campaigns, newsletters, and YouTube descriptions', 'Captions for LinkedIn, Facebook, Instagram, and TikTok'],
    tools: [],
  },
]
