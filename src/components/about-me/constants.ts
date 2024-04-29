export interface TechSkillsI {
  name: string;
  iconLogo: string;
}

export const languagesList: TechSkillsI[] = [
  { name: "JavaScript", iconLogo: "/icons/javascript-original.svg" },
  { name: "Ruby", iconLogo: "/icons/ruby-original.svg" },
  { name: "TypeScript", iconLogo: "/icons/typescript-original.svg" },
  { name: "HTML", iconLogo: "/icons/html5-original.svg" },
  { name: "CSS", iconLogo: "/icons/css3-original.svg" },
  { name: "Arduino", iconLogo: "/icons/arduino-original-wordmark.svg" },
  { name: "C++", iconLogo: "/icons/cplusplus-original.svg" },
];

export const frameworksLibraries: TechSkillsI[] = [
  { name: "ReactJS", iconLogo: "/icons/react-original.svg" },
  { name: "Ruby on Rails", iconLogo: "/icons/rails-plain-wordmark.svg" },
  { name: "NextJS", iconLogo: "/icons/nextjs-original.svg" },
  { name: "React Native", iconLogo: "/icons/react-original.svg" },
  { name: "Redux", iconLogo: "/icons/redux-original.svg" },
  { name: "React Query", iconLogo: "/icons/react-query-seeklogo.svg" },
  { name: "Sass", iconLogo: "/icons/sass-original.svg" },
  { name: "Tailwindcss", iconLogo: "/icons/tailwindcss-original.svg" },
  { name: "Supabase", iconLogo: "/icons/supabase-original.svg" },
  { name: "PostgreSQL", iconLogo: "/icons/postgresql-original.svg" },
  { name: "MySQL,", iconLogo: "/icons/mysql-original.svg" },
  { name: "Rswag", iconLogo: "/icons/swagger-original.svg" },
  { name: "MaterialUI", iconLogo: "/icons/materialui-original.svg" },
  { name: "Shadcn", iconLogo: "/icons/shadcn-ui-seeklogo.svg" },
];

export const toolsList: TechSkillsI[] = [
  { name: "Git", iconLogo: "/icons/git-original.svg" },
  { name: "GitHub", iconLogo: "/icons/github-original.svg" },
  { name: "Docker", iconLogo: "/icons/docker-original.svg" },
  { name: "Figma", iconLogo: "/icons/figma-original.svg" },
  { name: "Postman", iconLogo: "/icons/postman-original.svg" },
  { name: "Heroku", iconLogo: "/icons/heroku-original.svg" },
  { name: "Jest", iconLogo: "/icons/jest-plain.svg" },
  { name: "RSpec", iconLogo: "/icons/rspec-original.svg" },
];


export const greatExperience: { name: string; percentage: number }[] = [
  {
    name: "Product design",
    percentage: 90,
  },
  {
    name: "Algo & Problem solving",
    percentage: 70,
  },
  {
    name: "Mobile/Responsive",
    percentage: 90,
  },
  {
    name: "API integration",
    percentage: 85,
  },
  // {
  //   name: "Automated Testing",
  //   percentage: 85,
  // },
  {
    name: "SEO & Performance",
    percentage: 80,
  },
  // {
  //   name: "Accessibility",
  //   percentage: 80,
  // },
  // {
  //   name: "Scalability",
  //   percentage: 80,
  // },
  // {
  //   name: "Documentation",
  //   percentage: 80,
  // },
  // {
  // {
  //   name: "Code review",
  //   percentage: 80,
  // },
  // {
  //   name: "Code refactoring / optimization",
  //   percentage: 80,
  // },
];
