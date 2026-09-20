export interface Entry {
  title: string;
  role: string;
  period: string;
}

export interface Project {
  label: string;
  href: string;
}

export const intro = {
  name: 'Isak Skoog',
  tagline: '21yo · CS Student · Quant Dev @ Silverbeard Engineering',
  bio: 'Quant software engineer and computer science student based in Gothenburg, Sweden. Currently building quantitative trading systems while studying Computer Science.',
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
  { label: 'PowerMatch (archived internship project)', href: 'https://github.com/isak-sk/PowerMatch' },
  { label: 'TRMNL plugin for energy usage', href: 'https://github.com/isak-sk/influxdb_trmnl_plugin' },
  { label: 'Simulation of an epidemic', href: 'https://github.com/isak-sk/epidemic-sim' },
];

export const links: Project[] = [
  { label: 'blog', href: '/blog/' },
  { label: 'github', href: 'https://github.com/isak-sk' },
  { label: 'linkedin', href: 'https://linkedin.com/in/isakskoog' },
  { label: 'email', href: 'mailto:skoog.isak@gmail.com' },
];
