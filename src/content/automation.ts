import { method } from './method'

export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'
export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  about: string
}
export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }
const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })

export const liveAutomation = {
  eyebrow: 'Live automation',
  titleThin: 'Attract. Nurture.',
  titleBold: 'Convert.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'New Lead to', rest: 'Onboarding' },
  legend: { auto: 'Automation', lead: 'Lead action' },
  zones: { booking: 'GoHighLevel', pipeline: 'Sales pipeline' },
  connected: 'System live',
  hint: { hover: 'Hover or select a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'Lead Captured', tag: 'Form / calendar', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'A form submission or calendar booking saves or updates the contact in GoHighLevel, adds the lead to the pipeline, and notifies the team. A form submission adds 5 engagement points.' },
    { id: 'email', title: 'Welcome Email', tag: 'Acknowledge + CTA', plane: 'auto', icon: 'email', ...box(1, 0), step: 1, about: 'Thank the lead for reaching out and confirm that our team will follow up. Include a booking CTA for unbooked leads; acknowledge the appointment if they already booked.' },
    { id: 'booked', title: 'Call Booked', tag: 'Confirmed +10', plane: 'lead', icon: 'booked', ...box(2, 0), step: 1, about: 'A confirmed appointment adds 10 points and moves the pipeline stage. Send the meeting link, date, time, and time zone. Direct calendar bookings enter here after the welcome email.' },
    { id: 'day', title: 'Reminder One', tag: '24 hours before', plane: 'auto', icon: 'reminder', ...box(3, 0), step: 1, about: 'Send a reminder 24 hours before the appointment with the meeting link, date, time, and time zone, plus a way to reschedule. Skip this reminder for bookings made within 24 hours.' },
    { id: 'hour', title: 'Reminder Two', tag: '15 minutes before', plane: 'auto', icon: 'alarm', ...box(4, 0), step: 1, about: 'Send the meeting link again 15 minutes before the call so the lead can join easily. Cancel old reminders when a booking changes; use the new appointment time for rescheduled reminders.' },
    { id: 'call', title: 'Intro Call', tag: 'Attended +15', plane: 'lead', icon: 'call', ...box(5, 0), step: 2, about: 'Meet through the shared link, discuss the business, goals, and current systems, and identify the right service. Attendance adds 15 points. Route the outcome to a quote, later follow-up, or not a fit.' },
    { id: 'proposal', title: 'Quote Sent', tag: 'Package + scope', plane: 'auto', icon: 'proposal', ...box(0, 1), step: 2, about: 'Send a tailored package for GHL automation, website development, or content repurposing, with deliverables, scope, pricing, and next steps. A reply requesting a proposal adds 10 points; sending the quote adds none.' },
    { id: 'later', title: 'Maybe / Later', tag: 'Separate nurture', plane: 'lead', icon: 'later', ...box(3, 1), step: 2, about: 'If the lead says maybe or not right now, record their reason and preferred follow-up timing. Move them out of the active sales sequence and into a separate nurture workflow.' },
    { id: 'lost', title: 'Not a Fit', tag: 'Close with reason', plane: 'lead', icon: 'lost', ...box(5, 1), step: 2, about: 'If their needs fall outside our services, budget, or scope, record the reason and close the opportunity. Send a courteous response, offer a referral when suitable, and stop the sales and nurture sequence.' },
    { id: 'won', title: 'Signed Contract', tag: 'Accepted +25', plane: 'lead', icon: 'won', ...box(1, 1), step: 2, about: 'The lead accepts the agreed scope with their signature before onboarding. Add 25 points, mark the deal won, notify the team, stop lead-nurture emails, and send the onboarding next steps.' },
    { id: 'nurture', title: 'Stay in Touch', tag: 'Value + check-ins', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'Send useful tips, relevant service examples, and scheduled check-ins that reflect the recorded status. When the lead replies with renewed interest or books a call, return them to the active pipeline.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'hour', to: 'booked', style: 'dashed', label: 'Booking rescheduled' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'call', to: 'later', style: 'dashed' },
    { from: 'call', to: 'lost', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'later', to: 'nurture', style: 'solid' },
  ] satisfies FlowLink[],
  operations: {
    eyebrow: 'Behind the workflow',
    title: 'Every lead has a next step.',
    intro: 'From first enquiry to onboarding, the contact record, pipeline, and team stay connected in GoHighLevel.',
    items: [
      { title: 'Capture, save, notify', body: 'A form submission or calendar booking creates or updates the GHL contact and pipeline opportunity. The team receives an internal notification, and the lead receives a welcome email acknowledging their input and confirming a follow-up.' },
      { title: 'Follow up with the right message', body: 'Unbooked leads receive a sequence of helpful emails with a booking CTA. Already booked leads move straight to appointment confirmation and reminders. Cancelled appointments stop their reminders; rescheduled appointments use the new time.' },
      { title: 'Keep status in sync', body: 'A proposal goes to interested leads after the call. Maybe or later leads receive a separate campaign with useful content and check-ins. Renewed interest brings them back to the booking or proposal stage. Not-a-fit opportunities close with a reason; signed contracts trigger onboarding.' },
    ],
  },
  scoring: {
    eyebrow: 'Engagement scoring',
    title: 'See who is warming up.',
    intro: 'An example scoring model for prioritizing follow-up. More points signal stronger engagement; the conversation confirms service fit.',
    activities: [
      { activity: 'Submit an enquiry form', points: 5 },
      { activity: 'Click the booking CTA', points: 3 },
      { activity: 'Book a confirmed appointment', points: 10 },
      { activity: 'Attend the intro call', points: 15 },
      { activity: 'Reply with interest or request a proposal', points: 10 },
      { activity: 'Sign the contract', points: 25 },
    ],
    note: 'Count each activity once per opportunity, so repeat clicks and reschedules do not inflate the score. A direct calendar booking earns the booking points without requiring a form submission. Sending an email or quote does not add engagement points.',
  },
}
