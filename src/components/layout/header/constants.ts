import { Route } from "@/types/routes";

export interface MenuItemProps {
  label: string;
  link: Route | string;
}

export const menuItems: MenuItemProps[] = [
  // {
  //   label: "Home",
  //   link: Route.HOME,
  // },
  {
    label: "About",
    link: Route.ABOUT,
  },
  {
    label: "Work",
    link: Route.WORK,
  },
  {
    label: "Blog",
    link: Route.BLOG,
  },
  {
    label: "Contact Me",
    link: Route.CONTACT,
  }
]

export const socialItems: MenuItemProps[] = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kasongo-mukebo-ben",
  },
  {
    label: "GitHub",
    link: "https://github.com/benMukebo",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/BenMukebo",
  },
  {
    label: "Medium",
    link: "https://benmukebo.medium.com",
  }
]
