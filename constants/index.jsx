import project1 from "../src/assets/autismo.jpeg";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
// import personImage from "../src/assets/testimonial.jpg";


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skill", href: "#skill" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Chetan Teli",
  role: "Web Development || AI & ML || Cyber Security  Enthusiast",
  subheading:
    "I am an Engineering Student, from 3rd year B.Tech Computer Science and Engineering .",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Autismo Website",
    description:
      "Autistick is a project dedicated to empowering individuals with autism by providing resources, tools, and community support. Our mission is to promote inclusion, foster understanding, and celebrate neurodiversity through accessible content and initiatives.",
    techStack: ["HTML", "CSS", "Xamp", "Bootstrap"],
    imgSrc: project1,
    link: "http://localhost/Autismo/",
  },
  // {
  //   id: 2,
  //   title: "Social Media App",
  //   description:
  //     "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
  //   techStack: ["React", "Firebase", "Redux"],
  //   imgSrc: project2,
  //   link: "https://example-socialapp.com",
  // },
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
  //   techStack: ["Next.js", "Tailwind CSS"],
  //   imgSrc: project3,
  //   link: "https://myportfolio.com",
  // },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description:
  //     "A blogging platform with a content management system, user authentication, and an intuitive editor.",
  //   techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
  //   imgSrc: project4,
  //   link: "https://example-blogplatform.com",
  // },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "A task management tool with user authentication, reminders, and collaboration features.",
  //   techStack: ["Angular", "Firebase", "Material UI"],
  //   imgSrc: project5,
  //   link: "https://example-taskapp.com",
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  // },
];

export const SKILLS = [
  {
    name: "WEB Development", // Web Development item
    // icon: <RiGlobalLine className="text-blue-500" />, // Use RiGlobalLine icon
  },
  {
    name: "AI (Artificial Intelligence",
    // icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "ChatBot Development",
    // icon: <RiCss3Line className="text-blue-500" />,
  },
 
  {
    name: "Leadership",
    // icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Cloud",
    // icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Advance Excel",
    // icon: <RiDatabaseLine className="text-green-600" />,
  },

  {
    name: "Program Management",
    // icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "DSA",
   
  },
  
  {
    name: "Prompt Engineering",
    // icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Python",
    // icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Artificial Intelligence",
    // icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Ui/Ux Design",
    // icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Figma",
    
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },

  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },

  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Lead of Coding Ninjas Campus Club",
    company: "Coding Ninjas",
    description:
      "Lead of the Coding Ninjas Campus Club, responsible for organizing coding events and fostering a collaborative learning environment. Engages members through workshops, Hackathons, and skill-building activities.",
    techStack: ["Leadership", "Communication", "Management", ],
  },
  // {
  //   yearRange: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description:
  //     "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
  //   techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  // },
  // {
  //   yearRange: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description:
  //     "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
  //   techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   yearRange: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "PayPal",
  //   description:
  //     "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
  //   techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  // },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor Of Technology [B.Tech]",
    institution: "Deogiri Institute Of Engineering And Management Studies",
    duration: "2022 - 2026",
    description:
      "Graduated with a B.Tech in Computer Science Engineering, specializing in Technology And Artificial Intelligence. Driven by a passion for web development and cybersecurity, I am committed to continuously learning about advancements in the field..",
  },
  // {
  //   id: 2,
  //   degree: "Master of Science in Software Engineering",
  //   institution: "MIT",
  //   duration: "2016 - 2018",
  //   description:
  //     "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  // },
  // {
  //   id: 3,
  //   degree: "Certified React Developer",
  //   institution: "Udacity Nanodegree",
  //   duration: "2019",
  //   description:
  //     "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  // },
];

// export const TESTIMONIAL = {
//   name: "Sarah Doe",
//   title: "CEO, TechCorp",
//   quote:
//     "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  
// };
