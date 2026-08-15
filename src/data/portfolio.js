// ============================================================================
// CENTRAL PORTFOLIO CONFIGURATION
// Edit this file to update personal info and links without touching any
// component code. Everything below is sourced only from the information
// the site owner (Mostafa) provided — no invented details.
// ============================================================================

import { withBase } from '../utils/paths'

export const personal = {
  fullName: 'Mostafa Yehia Rageb',
  title: 'Junior Data Analyst',
  headline: 'Junior Data Analyst | Power BI | SQL | Excel | Python',
  location: 'Egypt',

  // Short, factual summary used in the Hero section.
  heroSummary:
    'I analyze data, build dashboards, and turn operational information into clear, actionable reporting — combining Power BI, Excel, SQL and Python with several years of real, customer-facing business experience.',

  // ------------------------------------------------------------------------
  // CONTACT — placeholders below are clearly marked. Replace with your real
  // details; nothing was invented for these fields since they were not
  // supplied in the source brief.
  // ------------------------------------------------------------------------
  email: 'moustafayehia2012@gmail.com', // TODO: replace with your real email
  linkedin: 'https://www.linkedin.com/in/mostafa-yehia-1b62149a', // TODO: replace with your real LinkedIn URL
  github: 'https://github.com/Moustafa-tech', // Derived from your MISUO GitHub repo owner — update if incorrect

  // WhatsApp click-to-chat number, digits only, with country code, no
  // spaces, no "+", no leading zero (E.164 format without the plus sign).
  // Example for Egypt: "201234567890"
  // TODO: replace with your real WhatsApp number. Left blank on purpose —
  // no phone number was supplied, and one was not invented.
  whatsappNumber: '',

  cvPath: withBase('Mostafa_Yehia_Rageb_CV.pdf'),
  profileImage: withBase('images/profile/profile.jpeg'),
}

export const whatsappLink = "https://wa.me/201143689449"

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const aboutStory = {
  eyebrow: 'About Me',
  paragraphs: [
    'I started my career in customer service, working directly with customers across telecom and business-process-outsourcing environments before progressing to a Senior Customer Service Officer role. That path gave me a grounding that a lot of analysts build later, if at all: I learned how real operations run, how service-level and performance KPIs are tracked day to day, how to communicate clearly with stakeholders under pressure, and how to notice patterns and inconsistencies in the data behind day-to-day decisions.',
    'Over time, that attention to operational detail turned into a genuine interest in the data itself — not just reporting numbers, but understanding what they mean and how to present them so a manager or a team can act on them. That interest led me to build practical skills in Power BI, Excel, SQL and Python, and to start taking on freelance data analyst and operations support work alongside my customer service role.',
    'Today I work as a Junior Data Analyst and career shifter. I build dashboards, clean and structure datasets, run exploratory analysis, and put together reporting that supports decision-making — while continuing to apply the communication and operational understanding I built over several years of customer-facing work. I am practical, still learning deliberately every week, and focused on building real-world analytical solutions rather than claiming expertise I don\u2019t yet have.',
  ],
  highlights: [
    { label: 'Communication & stakeholder reporting', detail: 'Built through years of direct customer and cross-team communication.' },
    { label: 'Operational & KPI awareness', detail: 'Hands-on experience monitoring service-level and performance metrics.' },
    { label: 'Attention to detail', detail: 'Applied to data quality checks, validation and reporting accuracy.' },
    { label: 'Practical, self-driven learning', detail: 'Power BI, SQL, Excel and Python skills built through real project work.' },
  ],
  careerPath: [
    'Customer Service Agent',
    'Senior Customer Service Officer',
    'Freelance Data Analyst & Operations Support',
    'Junior Data Analyst',
  ],
}
