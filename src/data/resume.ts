export interface Entry {
  title: string;
  role: string;
  period: string;
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

// Only the year is stored so the age can be computed at build time.
const birthYear = 2004;

export const intro = {
  name: 'Isak Skoog',
  age: new Date().getFullYear() - birthYear,
  role: 'CS Student · Quant Dev @ Silverbeard Engineering',
  line: 'Quant software engineer and computer science student in Gothenburg, Sweden.',
};

export const education: Entry[] = [
  { title: 'University of Gothenburg', role: 'Bachelor of Science in Computer Science', period: '2026 - 2029' },
  { title: 'Komvux Alingsås', role: 'High school diploma for university admittance', period: '2024 - 2026' },
  { title: 'Technische Berufsschule Zurich', role: 'Technical Highschool during apprenticeship', period: '2020 - 2024' },
];

export const experience: Entry[] = [
  { title: 'Silverbeard Engineering AB', role: 'Quantitative Software Engineer', period: '2024 - Present' },
  { title: 'Eniwa AG', role: 'Software Engineer Intern', period: 'May 2025 - Aug. 2025' },
  { title: 'UBS', role: 'Platform Engineer Apprentice', period: '2020 - 2024' },
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
  { label: 'about', href: '/about/' },
  { label: 'cv', href: '/cv/' },
  { label: 'projects', href: '/projects/' },
  { label: 'blog', href: '/blog/' },
];

export const links: Link[] = [
  { label: 'github', href: 'https://github.com/isak-sk' },
  { label: 'linkedin', href: 'https://linkedin.com/in/isakskoog' },
  { label: 'email', href: 'mailto:skoog.isak@gmail.com' },
  { label: 'rss', href: '/rss.xml' },
];
