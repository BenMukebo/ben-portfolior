export interface ArticleI {
  id: number;
  title: string;
  image?: string;
  publishDate: string;
  link: string;
  description: string;
}

export const blockArticlesData: ArticleI[] = [
  {
    id: 1,
    title: "Make ActiveRecord::Enum validation in Rails API application",
    image: "/images/block/enum-validation.svg",
    publishDate: "Nov 14, 2023",
    link: "https://benmukebo.medium.com/make-activerecord-enum-validation-in-rails-api-application-2f42d0c4bec2",
    description:
      "As all know, Before Rails version 7.1 When you assign an incorrect value to any record that has an enum as type, it normally raises an ArgumentError as Server Error status: 500 And, for those who do know, a Rails enum is a way to define a set of allowed…",
  },
  {
    id: 2,
    title: "Devise Token Auth vs Devise JWT",
    image: "/images/block/devise-token-auth-jwt.svg",
    publishDate: "Apr 8, 2023",
    link: "https://benmukebo.medium.com/rails-api-user-authentication-36346b68157e",
    description:
      "One of the most important considerations when creating a new Rails API application is making sure user authentication is implemented correctly. Determining the best strategy for deciding between numerous authentication methods and solutions, such as “Devise Token Auth” and “Devise JWT,” is essential…",
  },
  {
    id: 3,
    title: "Preventing SQL Injection for Rails Queries",
    // image: "https://randomuser.me/api",
    publishDate: "Jan 21, 2023",
    link: "https://benmukebo.medium.com/how-to-prevent-sql-injection-writing-your-queries-in-rails-3b379cb8f17f",
    description:
      "As a Rails developer, writing secure and efficient model methods that interact with the database is crucial. Recently, I discovered that using the Rails query API can prevent SQL injection and improve the security of your application. In this article, we will explore the basics of SQL injection and how…",
  },
  {
    id: 4,
    title: "User Authentication app in Ruby on Rails with Devise-JWT tutorial",
    // image: "https://randomuser.me/api",
    publishDate: "Nov 11, 2022",
    link: "https://benmukebo.medium.com/user-authentication-app-in-ruby-on-rails-with-devise-jwt-tutorial-adabebebd83e",
    description:
      "During my training a while ago, I had a lot of trouble setting up user authentication to generate a token based on the user payload of your choice, which is attached to every request that requires client-side authentication to identify the user on the server. After more research and reading…",
  },
  {
    id: 5,
    title: "How to become a successful software developer",
    // image: "https://randomuser.me/api",
    publishDate: "Nov 13, 2021",
    link: "https://benmukebo.medium.com/how-to-become-a-successful-software-developer-6007a53d4deb",
    description:
      "What are the key traits and qualities that every successful software developer is required to have? Previously I could never imagine that becoming a good software developer required Four major things that...",
  },
  {
    id: 6,
    title: "Session Cookies vs. A Devise-JWT for Authenticating Users in Ruby on Rails",
    // image: "https://randomuser.me/api",
    publishDate: "Aug 30, 2021",
    link: "https://benmukebo.medium.com/how-to-become-a-successful-software-developer-6007a53d4deb",
    description:
      "This article will explain the differences between Devise-JWT and Sessions, as well as which one to use for authentication. Recently, I ha...",
  },
];
