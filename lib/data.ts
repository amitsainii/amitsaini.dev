import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Staff Software Engineer",
    location: "C2FO",
    tasks: [
      "Enforced best practices and coding guidelines through code reviews.",
      "Collaborated with Product Managers and UX designers to translate complex requirements into user-friendly frontend solutions."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Engineering Manager",
    location: "C2FO",
    tasks:[
      "Supervised the engineering team to maintain project quality and meet deadlines.",
      "Supported the professional growth of the team through mentorship and guidance."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Senior Software Engineer",
    location: "C2FO",
    tasks:[
      "Stepped into a leadership role, informally serving as the tech lead on the team.",
      "Successfully orchestrated the migration of the Angular application to React.",
      "Provided mentorship to junior and mid-level engineers within the team and devoted time to conducting thorough PR reviews."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Senior Software Engineer",
    location: "Dineout (Times Internet)",
    tasks:[
      "Successfully transitioned Dineout's web app from MarkoJS to NextJS. With a focus on performance, this move elevated our Lighthouse scores from the 60s to 90+.",
      "I was solely responsible for the Restaurant Listing page, Homepage for GIRF (Great Indian Restaurant Festival) and the User Stories Page.",
      "Actively reviewed PRs, ensuring code quality and adherence to best practices."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Software Consultant",
    location: "Polestar Solutions & Services India Pvt. Ltd.",
    tasks:[
      "Led frontend development while also diving into backend intricacies with NodeJS.",
      "Actively collaborated on the design aspect, ensuring a seamless user experience.",
      "Beyond hands-on development, I championed the growth of fellow engineers, sharing expertise, and fostering a culture of collaborative learning."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Software Engineer",
    location: "Invansys Technologies",
    tasks:[
      "Started my professional journey with Invansys Technologies.",
      "This experience ignited my passion and expertise in web development."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2016",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "NestJS",
  "Angular",
  "PWA",
  "Jest",
  "React Testing Library",
  "Tailwind CSS",
  "Github Actions"
] as const;
