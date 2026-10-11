import type { ClientAccount, Quote, VideoTestimonial } from './schema'

export const proofPage = {
  eyebrow: 'Client testimonials',
  titleThin: 'What clients',
  titleBold: 'say.',
  bands: { videos: 'On camera', quotes: 'Client feedback', clients: 'Client accounts' },
  lede: "A few words from the people I've worked with on websites, automations, and digital marketing.",
}

// Add client-approved clips and account details when available.
export const clientAccounts: ClientAccount[] = []
export const videoTestimonials: VideoTestimonial[] = []

// Supplied testimonial wording; client approval to be confirmed before publication.
export const communityQuotes: Quote[] = [
  {
    "name": "Liz Corey",
    "company": "Onthegrow Leadership",
    "photo": "/images/testimonials/liz-corey.png",
    "focus": "Website redesign, lead capture, automations, email marketing, graphics, and social media management.",
    "text": "Thank you Dan! We really appreciate all your help with the website, automations, and email campaigns. You also helped us with the downloadable resources, graphics, and social media posting. It made things a lot easier for us. Great working with you!"
  },
  {
    "name": "Robert Brill",
    "company": "NoFogNation",
    "photo": "/images/testimonials/robert-brill.png",
    "focus": "Website development, product uploads, automations, short-form video content, and social media posting.",
    "text": "We appreciate Dan for all the work he did on the website, product uploads, and automations. He also helped us with short-form videos and social media posting to promote the business. Thanks for all the extra effort!"
  },
  {
    "name": "Zakia Ringgold",
    "photo": "/images/testimonials/zakia-ringgold.png",
    "company": "Business Tech Lab",
    "focus": "Client onboarding, information gathering, account setup, client training, and podcast content repurposing.",
    "text": "Dan really did a great job helping us onboard our clients, collect all the needed information, and guide them through the setup and training. We appreciate his help in making the whole process easier for everyone."
  },
  {
    "name": "Hamish Hollingsworth",
    "photo": "/images/testimonials/hamish-hollingsworth.png",
    "company": "Smarter Systems",
    "focus": "Video tracking automation, lead qualification, landing page tracking, and automated chatbots.",
    "text": "The video tracking automation that Daniel did on our landing page was a big help. We could see who submitted their details and how much of the video they watched. The chatbot automation was also a great addition. Really appreciate his work on this!"
  },
  {
    "name": "Dominic Kennedy",
    "photo": "/images/testimonials/dominic-kennedy.png",
    "company": "DK Mindset",
    "focus": "Website development, static graphics, carousels, short-form videos, social media content, and campaign automations.",
    "text": "Daniel optimized all the graphics, carousels, reels, and other content for our social media pages. He also helped build the website and prepare the campaign automations. Thanks for helping us get everything ready!"
  },
  {
    "name": "Pranav Sahai",
    "photo": "/images/testimonials/pranav-sahai.png",
    "company": "Jumbo Loan Experts",
    "focus": "Website development from scratch, multiple website pages, phone number A2P verification support, social media content strategy, and campaign planning.",
    "text": "Dan, you must be proud! You did a great job building our website from scratch and setting up the different pages. We look forward for your help in A2P number verification, social media content, and campaign planning. We appreciate all the work you put into helping us build our online presence!"
  },
  {
    "name": "Richard Ocasla",
    "photo": "/images/testimonials/richard-ocasla.png",
    "company": "PCS Connect",
    "focus": "Website development, business promotion ideas, social media strategy, and lead generation.",
    "text": "Thanks Dan! We really appreciate your work on building our website and sharing ideas on how to promote the business. You also helped us see more ways to reach people and get more leads through social media. Thanks for your help and support!"
  }
]
