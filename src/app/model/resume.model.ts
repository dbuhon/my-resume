export interface Info {
  name: string;
  job: string;
  company: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  about: string[];
  portfolio: string;
}

export interface Skill {
  techno: string;
  detail: string;
  level: number;
}

export interface Ability {
  title: string;
  skills: Skill[];
}

export interface Career {
  company: string;
  location: string;
  status: string;
  date: string;
  logo: string;
  quote: string;
  description: string[];
}

export interface Link {
  type: string;
  href: string;
  value: string;
}

export interface Project {
  title: string;
  detail: string;
  tags: string[];
  quote: string;
  description: string[];
  links: Link[];
  logo: string;
}

export interface Education {
  school: string;
  location: string;
  diploma: string;
  date: string;
  detail: string;
  quote: string;
  link: Link;
  logo: string;
}

export interface Language {
  lang: string;
  level: string;
  certification: string;
  flag: string;
}

export interface Resume {
  global: Global;
  info: Info;
  abilities: Ability[];
  career: Career[];
  projects: Project[];
  education: Education[];
  languages: Language[];
}

export interface Global {
  contact_me: string;
  about_me: string;
  export_pdf: string;
  skills: string;
  career: string;
  education: string;
  personal_projects: string;
  languages: string;
}
