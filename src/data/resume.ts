export interface Entry {
  title: string;
  detail: string;
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
  { title: 'University of Gothenburg', detail: 'Bachelor of Science in Computer Science | 2026 - 2029' },
  { title: 'Komvux Alingsås', detail: 'High school diploma for university admittance | 2024 - 2026' },
  { title: 'Technische Berufsschule Zurich', detail: 'Technical Highschool during apprenticeship | 2020 - 2024' },
];

export const experience: Entry[] = [
  { title: 'Silverbeard Engineering AB', detail: 'Quantitative Software Engineer | 2024 - Present' },
  { title: 'Eniwa AG', detail: 'Software Engineer Intern | May 2025 - Aug. 2025' },
  { title: 'UBS', detail: 'Platform Engineer Apprentice | 2020 - 2024' },
];

export const projects: Project[] = [
  { label: 'PowerMatch (archived internship project)', href: 'https://github.com/isak-sk/PowerMatch' },
  { label: 'TRMNL plugin for energy usage', href: 'https://github.com/isak-sk/influxdb_trmnl_plugin' },
  { label: 'Simulation of an epidemic', href: 'https://github.com/isak-sk/epidemic-sim' },
];

export const links: Project[] = [
  { label: 'github', href: 'https://github.com/isak-sk' },
  { label: 'linkedin', href: 'https://linkedin.com/in/isakskoog' },
  { label: 'email', href: 'mailto:skoog.isak@gmail.com' },
];
