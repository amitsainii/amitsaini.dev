import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { AiFillHome, AiFillHtml5 } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { FaLaptopCode, FaReact, FaNodeJs, FaAngular } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BiLogoCss3 } from 'react-icons/bi';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';
import { SiNestjs, SiPwa, SiJest, SiTailwindcss, SiGithubactions } from 'react-icons/si';
import { MdContactMail } from 'react-icons/md';

export const links = [
  {
    name: 'Home',
    hash: '#home',
    icon: React.createElement(AiFillHome),
  },
  {
    name: 'About',
    hash: '#about',
    icon: React.createElement(FaUserAlt),
  },
  {
    name: 'Skills',
    hash: '#skills',
    icon: React.createElement(FaLaptopCode),
  },
  {
    name: 'Experience',
    hash: '#experience',
    icon: React.createElement(MdWork),
  },
  {
    name: 'Contact',
    hash: '#contact',
    icon: React.createElement(MdContactMail),
  },
] as const;

export const experiencesData = [
  {
    title: 'Staff Software Engineer',
    location: 'C2FO',
    tasks: [
      'Enforced best practices and coding guidelines through code reviews.',
      'Collaborated with Product Managers and UX designers to translate complex requirements into user-friendly frontend solutions.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2022 - Present',
  },
  {
    title: 'Engineering Manager',
    location: 'C2FO',
    tasks: [
      'Supervised the engineering team to maintain project quality and meet deadlines.',
      'Supported the professional growth of the team through mentorship and guidance.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022',
  },
  {
    title: 'Senior Software Engineer',
    location: 'C2FO',
    tasks: [
      'Stepped into a leadership role, informally serving as the tech lead on the team.',
      'Successfully orchestrated the migration of the Angular application to React.',
      'Provided mentorship to junior and mid-level engineers within the team and devoted time to conducting thorough PR reviews.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Dineout (Times Internet)',
    tasks: [
      "Successfully transitioned Dineout's web app from MarkoJS to NextJS. With a focus on performance, this move elevated our Lighthouse scores from the 60s to 90+.",
      'I was solely responsible for the Restaurant Listing page, Homepage for GIRF (Great Indian Restaurant Festival) and the User Stories Page.',
      'Actively reviewed PRs, ensuring code quality and adherence to best practices.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2020',
  },
  {
    title: 'Software Consultant',
    location: 'Polestar Solutions & Services India Pvt. Ltd.',
    tasks: [
      'Led frontend development while also diving into backend intricacies with NodeJS.',
      'Actively collaborated on the design aspect, ensuring a seamless user experience.',
      'Beyond hands-on development, I championed the growth of fellow engineers, sharing expertise, and fostering a culture of collaborative learning.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2016 - 2018',
  },
  {
    title: 'Software Engineer',
    location: 'Invansys Technologies',
    tasks: [
      'Started my professional journey with Invansys Technologies.',
      'This experience ignited my passion and expertise in web development.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: '2015 - 2016',
  },
] as const;

export const skillsData = [
  {
    skillName: 'HTML',
    icon: React.createElement(AiFillHtml5),
  },
  {
    skillName: 'CSS',
    icon: React.createElement(BiLogoCss3),
  },
  {
    skillName: 'JavaScript',
    icon: React.createElement(SiJavascript),
  },
  {
    skillName: 'TypeScript',
    icon: React.createElement(SiTypescript),
  },
  {
    skillName: 'React',
    icon: React.createElement(FaReact),
  },
  {
    skillName: 'Next.js',
    icon: React.createElement(TbBrandNextjs),
  },
  {
    skillName: 'Node.js',
    icon: React.createElement(FaNodeJs),
  },
  {
    skillName: 'GraphQL',
    icon: React.createElement(GrGraphQl),
  },
  {
    skillName: 'NestJS',
    icon: React.createElement(SiNestjs),
  },
  {
    skillName: 'Angular',
    icon: React.createElement(FaAngular),
  },
  {
    skillName: 'PWA',
    icon: React.createElement(SiPwa),
  },
  {
    skillName: 'Jest',
    icon: React.createElement(SiJest),
  },
  {
    skillName: 'Tailwind CSS',
    icon: React.createElement(SiTailwindcss),
  },
  {
    skillName: 'Github Actions',
    icon: React.createElement(SiGithubactions),
  },
] as const;
