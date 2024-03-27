export interface TestimonialI {
  id: number;
  name: string;
  image: string;
  position: string;
  linkedIn: string;
  location: string;
  text: string;
}

export const testimonialsData: TestimonialI[] = [
  {
    id: 1,
    name: "Cyril Iyadi",
    position: "Full - Stack Web Developer",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/cyril-iyadi/",
    // "Lagos Mainland, Nigeria",
    location: "Lagos, Nigeria",
    text:
      "A bright gentleman and reliable coding partner. Ben is dutiful and professional. He communicates proactively on challenges during collaboration and his insight is invaluable in a mob programming session. I enjoy my time working with him and I am proud to call him a friend.",
  },
  {
    id: 2,
    name: "Muhammad Sesay",
    position: "Experienced Full - Stack Develope",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/muhammad-m-sesay/",
    // Freetown, Western Area, Sierra Leone
    location: "Freetown, Sierra Leone",
    text:
      "Ben is a transformer. I got the chance to work with Ben on a couple of projects and his ability to transform tasks into new or different possibilities, makes him creative and a problem solver. I am greatly honoured to recommend Ben.",
  },
  {
    id: 3,
    name: "Toluwase Ajise",
    position: "Full-Stack Software Developer",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/toluwase-ajise/",
    location: "Lagos, Nigeria",
    text:
      "Ben is a very passionate developer willing to go the extra mile to get the job done and meet the deadlines. He is one of the great people I have had the opportunity to work with. We made some collaborative work on a few Javascript projects. Ben can be a solid fit for any team looking to build quality products.",
  },
  {
    id: 4,
    name: "Ahmed Al-Farouq",
    position: "Junior Cybersecurity Analyst",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/ahmed-al-farouq/",
    location: "Al Buhayrah, Egypt",
    text:
      "Ben was really an amazing partner, harder worker, he is always improving himself, striving to be the best, has good technical skills and very high soft skills, he is a great partner to anyone and I can't recommend him enough. it was nice to work with him.",
  },
  {
    id: 5,
    name: "Juliana Ifionu",
    position: "Full - Stack Develope",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/julianaifionu/",
    location: "Abuja, Nigeria",
    text:
      "Ben is a great developer who is determined and dedicated to programming. His eagerness to learn new skills and technologies makes him stand out and a greater developer. I would recommend him to any software development role because he is a smart developer and loves solving problems. He also enjoys coding.",
  },
  {
    id: 6,
    name: "Clement Odai",
    position: "Co-Founder at RerdSystems Ltd",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/vikers-jnr/",
    location: "Accra, Ghana",
    text:
      "Working with Ben was a game-changer for our project. His attention to detail and problem-solving skills truly set him apart.",
  },
  {
    id: 7,
    name: "Francis Ugorji",
    position: "Software Developer",
    image: "https://randomuser.me/api",
    linkedIn: "https://www.linkedin.com/in/francis-ugorji/",
    location: "Lagos, Nigeria",
    text:
      "Ben is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled in a software development program, and in that time his work ethic blew me away. Ben views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. He's also super friendly; by the time our project was done, I felt like we'd known each other for years. I can't recommend him enough!",
  },
];
