export interface Entry {
  title: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  label: string;
  href: string;
  description: string;
}

export interface Link {
  label: string;
  href: string;
}

export const intro = {
  name: 'Isak Skoog',
  role: 'Software Engineer · CS Student',
  line: 'Software engineer and computer science student in Gothenburg, Sweden.',
};

export const education: Entry[] = [
  {
    title: 'University of Gothenburg',
    role: 'Bachelor of Science in Computer Science',
    period: '2026 - 2029',
    description: 'Studying computer science.',
  },
  {
    title: 'Technische Berufsschule Zurich',
    role: 'Technical Highschool during apprenticeship',
    period: '2020 - 2024',
    description: 'Coursework centered on networking, Bash, Python and cybersecurity.',
  },
];

export const experience: Entry[] = [
  {
    title: 'Silverbeard Engineering AB',
    role: 'Software Engineer',
    period: '2024 - Present',
    description: 'Designing and building quantitative trading systems from the ground up.',
  },
  {
    title: 'Eniwa AG',
    role: 'Software Engineer Intern',
    period: 'May 2025 - Aug. 2025',
    description:
      'Built energy-system simulations, and a suite of data pipelines that makes all of the company\'s energy data available to analysts.',
  },
  {
    title: 'UBS',
    role: 'Platform Engineer Apprentice',
    period: '2020 - 2024',
    description:
      'Worked on systems development across cyber, hosting and trading infrastructure, with a focus on automation, tooling and problem solving.',
  },
];

export const projects: Project[] = [
  {
    label: 'PowerMatch',
    href: 'https://github.com/isak-sk/PowerMatch',
    description: 'An energy game made during my internship at Eniwa for the Berufsmesse Aarau career fair. Archived.',
  },
  {
    label: 'TRMNL energy usage plugin',
    href: 'https://github.com/isak-sk/influxdb_trmnl_plugin',
    description: 'A TRMNL plugin that shows energy usage over time. The data comes from smart devices and is stored in InfluxDB.',
  },
  {
    label: 'Epidemic simulation',
    href: 'https://github.com/isak-sk/epidemic-sim',
    description: 'An epidemic simulation in Python, my final project at Komvux.',
  },
];

export const pages: Link[] = [
  { label: 'cv', href: '/cv/' },
  { label: 'projects', href: '/projects/' },
];

export const links: Link[] = [
  { label: 'github', href: 'https://github.com/isak-sk' },
  { label: 'linkedin', href: 'https://linkedin.com/in/isakskoog' },
  { label: 'email', href: 'mailto:skoog.isak@gmail.com' },
];
