export interface ProjectCardI {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  demoLink: string;
  sourceCodeLink: string;
}

export const workedProjects: ProjectCardI[] = [
  {
    title: "Sweet Aromas",
    image: "/images/projects/sweet-aromas.png",
    description:
      "Sweet~aromas is a Recipes catalog that provides instructions for preparing and producing a certain food, dish, or drink. The purpose of a recipe is to have a precise record of the ingredients used, the amounts needed, and the way they are combined.",
    techStack: ["React", "Redux", "Context API", "Ruby on Rails"],
    demoLink: "https://sweet-aromas.netlify.app/",
    sourceCodeLink: "https://github.com/BenMukebo/sweet-aromas",
  },
  {
    title: "Kawira safaris LTD",
    image: "/images/projects/kawirasafaris.png",
    description:
      "Kawira safari is a company website founded on a true passion for the magnificent and diverse wildlife that lives in the protected National Parks, Rain Forests, and open plains of East Africa. Guiding Gorilla Trekking Safaris in Uganda and Rwanda, as well Wildlife Adventures for the last 10 years.",
    techStack: ["React", "Tailwindcss", "scss"],
    demoLink: "https://kawirasafaris.netlify.app/",
    sourceCodeLink: "#",
  },
  {
    title: "Ritach",
    image: "/images/projects/ritach.png",
    description:
      "is a web development business template built in Nextjs. Perfect for Creative Agency, Marketing Agency, Design Studios, Digital Marketing Agencies, and other business service websites.",
    techStack: ["Next", "JavaScript", "Tailwindcss"],
    demoLink: "https://ritach.vercel.app/",
    sourceCodeLink: "#",
  },
  {
    title: "Neutral",
    image: "/images/projects/neutral.webp",
    description:
      "Neutral is a digital agency platform that provides software development services to businesses, focusing on building and maintaining mobile and web applications.",
    techStack: ["React", "Ruby on Rails", "Tailwindcss", "scss", "PostgreSQL"],
    demoLink: "https://neutral.codes/",
    sourceCodeLink: "#",
  },
  {
    title: "Felli Technology",
    image: "/images/projects/felli-technology.png",
    description:
      "Hagsyo Kingdom is dedicated to providing top-notch services to its customers, while also working to reduce unemployment in the Congo.",
    techStack: ["React", "TypeScript", "Tailwindcss"],
    demoLink: "https://felli-technology.vercel.app/",
    sourceCodeLink: "#",
  },
  {
    title: "HillWood-Empire Frontend",
    image: "/images/projects/hillwood-empire.png",
    description:
      "HillWood-Empire is an online streaming platform that provides users with a diverse selection of movies, TV shows, videos, and content for kids.",
    techStack: ["React", "NextUI", "SCSS", "Tailwindcss"],
    demoLink: "https://hillwoodempire-frontend.vercel.app/",
    sourceCodeLink: "pirvate",
  },

  {
    title: "HillWood-Empire Backend",
    image: "/images/projects/hillwood-dashboad-api.png",
    description:
      "HillWood-Empire is an online streaming platform that provides users with a diverse selection of movies, TV shows, videos, and content for kids.",
    techStack: ["Ruby on Rails", "ActiveAdmin", "Tailwindcss", "Swagger"],
    demoLink: "https://hillwoodempire-frontend.vercel.app/",
    sourceCodeLink: "pirvate",
  },
  {
    title: "Budgy-Budget",
    image: "/images/projects/budgy-budget.png",
    description:
      "Budgy-Budget is a mobile web application where you can manage your budget. You have a list of transactions associated with a category so that you can see how much money you spent and on what.",
    techStack: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    demoLink: "",
    sourceCodeLink: "https://github.com/BenMukebo/Budgy-Budget",
  },
];
