import type { FaqItem } from './clerk'

export const ACAD_CONTACT_EMAIL = 'info@ngentech.co'

export const acadData = {
  name: 'ACAD',
  fullName: 'Ngentech ACAD',
  tagline: 'One Platform for Academic Excellence',
  status: 'Launching Soon',
  description:
    'ACAD is the Ngentech Academy — an AI-powered learning platform combining personalized learning paths, live interactive classrooms, and deep analytics into student progress.',
  contactEmail: ACAD_CONTACT_EMAIL,
  features: [
    {
      title: 'Smart Learning',
      description: 'AI-powered personalized learning paths adapted to each student.',
    },
    {
      title: 'Live Sessions',
      description: 'Real-time interactive classrooms with instructors.',
    },
    {
      title: 'Analytics',
      description: 'Deep insights into student progress and outcomes.',
    },
    {
      title: 'Courses',
      description: 'Structured courses with instructors, pricing, and progress tracking.',
    },
    {
      title: 'Enrollments',
      description: 'Seamless enrollment with per-student progress and status tracking.',
    },
    {
      title: 'Secure API',
      description: 'Go + Fiber API gateway with JWT authentication and PostgreSQL persistence.',
    },
  ],
  learningPaths: [
    {
      title: 'Foundations of Technology',
      description: 'Core computer science and engineering fundamentals.',
    },
    {
      title: 'AI & Machine Learning',
      description: 'From neural networks to deep research agents.',
    },
    {
      title: 'Blockchain & Web3',
      description: 'Distributed systems, smart contracts, and decentralized apps.',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Statistical analysis, DuckDB, and data engineering.',
    },
  ],
  techStack: [
    'SvelteKit 5',
    'Go + Fiber',
    'PostgreSQL',
    'TypeScript',
    'Docker & Compose',
  ],
  faqs: [
    {
      question: 'What is Ngentech ACAD?',
      answer:
        'ACAD is the Ngentech Academy — a learning platform for academic excellence, powered by AI for personalized learning, live sessions, and deep progress analytics.',
    },
    {
      question: 'When will ACAD launch?',
      answer:
        'ACAD is launching soon. Join the newsletter to get notified when enrollment opens.',
    },
    {
      question: 'How is ACAD different from other learning platforms?',
      answer:
        'ACAD pairs the Ngentech research ethos with AI — personalized learning paths driven by data, plus analytics that reveal how students actually learn.',
    },
    {
      question: 'Can I contact the ACAD team?',
      answer: `Yes — reach us at ${ACAD_CONTACT_EMAIL}.`,
    },
  ] as FaqItem[],
}

export const acadFaqs = acadData.faqs