import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What do you actually build?',
    answer: 'I build and maintain websites, connect lead acquisition and email nurturing workflows, and repurpose recorded videos into content. I work with local community churches, financial traders, wellness coaches, real estate firms, and SaaS agency owners.',
  },
  startSpeed: {
    question: 'How fast can you start?',
    answer: 'Share your scope and preferred timeline so we can discuss availability. I am based in Cavite, Philippines (UTC+8).',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer: 'My website and automation work centers on GoHighLevel. Tell me which tools you use so we can review how they fit your website, lead nurturing, and content workflow.',
  },
  pricing: {
    question: 'How much do you charge?',
    answer: 'Pricing depends on the services and scope you need. Share your goals, current setup, and deliverables so we can discuss a suitable package.',
  },
  afterWrite: {
    question: 'What happens after I write?',
    answer: 'We can review your goals and current setup, discuss the services that fit, and agree on the next step before onboarding.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
