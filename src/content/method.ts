import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'The Socinex approach',
  title: 'Attract. Nurture. Convert.',
  summary: 'Connect your online presence, content, and follow-up into a clear path from first interest to the next conversation.',
  steps: [
    { name: 'Attract', body: 'Reach the right people through your website and repurposed content.', inputs: ['Website', 'Short-form videos', 'Social captions', 'YouTube'] },
    { name: 'Nurture', body: 'Keep the conversation going with email campaigns and newsletters.', inputs: ['Email campaigns', 'Newsletters', 'Follow-up workflows'] },
    { name: 'Convert', body: 'Give interested leads a clear next step and keep the workflow running.', inputs: ['Enquiries', 'Booking flows', 'Automation maintenance'] },
  ] satisfies MethodStep[],
}
