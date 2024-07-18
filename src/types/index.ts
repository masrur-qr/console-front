export interface ILogin {
  phone: string;
  password: string;
}

export interface ProjectBanner {
  small: string;
  medium: string;
  large: string;
}

export interface ProjectLanguageDetails {
  project_name: string;
  description: string;
  sphere: string;
  duration: string;
}

export interface Project {
  Id: string;
  russian: ProjectLanguageDetails;
  english: ProjectLanguageDetails;
  link: string;
  banner: ProjectBanner;
}

export interface Order {
  Id: string;
  name: string;
  email: string;
  about: string;
  phone: string;
  services: string[];
  budget: string;
  link: string;
}

export interface Brief {
  Id?: string;
  company_name: string;
  sphere: string;
  email: string;
  website_link: string;
  project_goals: QuestionAnswer[];
  users: QuestionAnswer[];
  functional_requirements: QuestionAnswer[];
  design_style: QuestionAnswer[];
  technical_requirements: QuestionAnswer[];
  budget: QuestionAnswer[];
  liked_disliked: QuestionAnswer[];
  additional_questions: QuestionAnswer[];
  contacts: QuestionAnswer[];
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}
