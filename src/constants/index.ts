import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  IITJ,
  tesla,
  shopify,
  carrent,
  jobit,
  python,
  tripguide,
  threejs,
  s,
  hf,

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Quantitative Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C++",
    icon: s,
  },
  {
    name: "C++",
    icon: hf,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Pytorch",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: threejs,
  },
  {
    name: "C++",
    icon: python,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Undergraduate Researcher",
    companyName: "IIT Jodhpur",
    icon: IITJ,
    iconBg: "#E6DEDD",
    date: "August 2024 - April 2025",
    points: [
      "Involves implementation and improvisation of Kolmogorov Arnold Networks.",
      "Analyzed the implementation of KATs",
      "Optimized the GR-KANs with the principles of LwF and Icarl",
      "TechStack: PyTorch, HuggingFace, Transformers, Scikit-learn",
    ],
  },
  {
    title: "Winner of Code For Good'25",
    companyName: "JP Morgan Chase & Co.",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "June 2025",
    points: [
      "Developed a real-time student metrics dashboard with clear visualizations to track academic and qualitative progress.",
      "Enabled offline-first functionality via CSV uploads and printable quiz formats to support low-connectivity environments.",
      "Built automatic personalized PDF report generation with multilingual support.",
      "Used a scalable MERN + FastAPI stack with LangChain and Nginx reverse proxy.",
    ],
  },
  {
    title: "Contingent Member at Inter-IIT Tech Meet 13.0",
    companyName: "Untrade",
    icon: shopify,
    iconBg: "#00072D",
    date: "October 2024-December 2024",
    points: [
      "Dynamic portfolio manager selects optimal strategy every 7 days using performance metrics", "Combined multiple BTC/ETH strategies tailored for different market conditions", "Used Kalman Filters and CHOP to reduce noise and avoid false signals", "ATR-based SL/TP and Sharpe ratio filtering ensured effective risk management",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Achieved a rank of 5760 from 1.8 lakh students in JEE Advanced 2023",
  },
  {
    testimonial:"Have a stellar 9.44 CGPA at the end of 4th Semester with Departmental Rank 6 among 100+ students.",
  },
  {
    testimonial:"Winner of Code For Good'25 Hackathon organized by JP Morgan Chase & Co.",
  },
];

const projects: TProject[] = [
  {
    name: "Agent Opera",
    description:
      "AgentOpera is a system designed to act as an Operating System (OS) Controlling Agent, leveraging AI models and heuristic task management techniques. The project integrates OmniParser, a vision-based GUI parsing tool, to enable seamless interaction with graphical user interfaces (GUIs) and execute tasks autonomously. ",
    tags: [
      {
        name: "OmniParser",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "VLMs",
        color: "pink-text-gradient",
      },
    ],
    sourceCodeLink: "https://github.com/PrajnaAgrawal26/AgentOpera",
  },
  {
    name: "Image-Retrieval",
    description:
      "This project implements an image retrieval system using machine learning techniques. The system is designed to classify images from the CIFAR-10 dataset and retrieve visually similar images based on the predicted class.",
    tags: [
      {
        name: "Traditional ML",
        color: "blue-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    sourceCodeLink: "https://github.com/PrajnaAgrawal26/Image-Retrieval_PRML",
  },
  {
    name: "Movie Recommendation System",
    description:
      "This project is a movie recommendation system implemented in C++ that uses bipartite graph. The system leverages cosine similarity to compare genre frequencies, identifies similar movies, and ranks them based on average ratings.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Graphs",
        color: "pink-text-gradient",
      },
    ],

    sourceCodeLink: "https://github.com/PrajnaAgrawal26/Graph-Recommendation-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
