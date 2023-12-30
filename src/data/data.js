import {
  about,
  skills,
  github,
  linkedin,
  react,
  redux,
  html,
  css,
  scss,
  js,
  java,
  reactBootstrap,
  bootstrap,
  materialUi,
  primeReact,
  node,
  express,
  mongo,
  sql,
  npm,
  yarn,
  pnpm,
  vscode,
  git,
  github_,
  office,
  postman,
  bitbucket,
} from "../assets/svgs/";
import { img1, img2 } from "../assets/images";

const sideNavData = [
  {
    id: Math.random(),
    label: "About Me",
    path: "/about",
    icon: about,
  },
  {
    id: Math.random(),
    label: "Skills",
    path: "/skills",
    icon: skills,
  },
  {
    id: Math.random(),
    label: "Experience",
    path: "/experience",
    icon: about,
  },
  {
    id: Math.random(),
    label: "Projects",
    path: "/projects",
    icon: about,
  },
  {
    id: Math.random(),
    label: "Education",
    path: "/education",
    icon: about,
  },
];

const TopNavData = [
  {
    id: Math.random(),
    icon: github,
    path: "https://github.com/RaviTeja884781",
  },
  {
    id: Math.random(),
    icon: linkedin,
    path: "https://www.linkedin.com/in/ravi-teja-2a2989145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
];

let description = [
  {
    id: Math.random(),
    desc: "As a Software Engineer specializing in React.js frontend development, I bring a strong foundation in building dynamic and intuitive user interfaces. With a proven track record of delivering high-quality web applications, I am skilled in translating design mockups into responsive and engaging UI components.",
  },
  {
    id: Math.random(),
    desc: "I excel in leveraging React.js frameworks and libraries to develop scalable and modular code, ensuring the maintainability and performance of applications. I have extensive experience collaborating with cross-functional teams, including designers, backend developers, and product managers, to create seamless user experiences and meet project goals.",
  },
  {
    id: Math.random(),
    desc: "Throughout my career, I have demonstrated a passion for staying updated with the latest industry trends and best practices. I possess a deep understanding of JavaScript, HTML, and CSS, allowing me to implement cutting-edge features and optimize website performance.",
  },
  {
    id: Math.random(),
    desc: "My strong problem-solving abilities enable me to tackle complex challenges and find innovative solutions, resulting in efficient and elegant code. I am a self-motivated professional who thrives in fast-paced environments, and I possess excellent communication skills that foster effective collaboration and knowledge sharing.",
  },
  {
    id: Math.random(),
    desc: "I am passionate about creating exceptional user experiences and driving positive impact through technology. I am always eager to take on new projects and contribute my expertise to deliver top-notch solutions. Feel free to connect with me on LinkedIn to explore potential collaborations or discuss the exciting world of React.js frontend development.",
  },
];

const images = [img1, img2];

const textList = [
  "Full stack Developer",
  "MERN Developer",
  "Front-End Developer",
  "Creator",
];

const ContactInfo = {
  primary_email: "ladi.ravi884781@gmail.com",
  secondary_email: "raviteja884781@gmail.com",
  phno: 8847819634,
};

const MySkills = {
  FrontEnd: [
    { id: Math.random(), icon: react, label: "React" },
    { id: Math.random(), icon: redux, label: "Redux" },
    { id: Math.random(), icon: html, label: "Html" },
    { id: Math.random(), icon: css, label: "Css" },
    { id: Math.random(), icon: scss, label: "Scss" },
    { id: Math.random(), icon: js, label: "JavaScript" },
    { id: Math.random(), icon: java, label: "Java" },
    { id: Math.random(), icon: reactBootstrap, label: "React Bootstrap" },
    { id: Math.random(), icon: bootstrap, label: "Bootstrap" },
    { id: Math.random(), icon: materialUi, label: "Material UI" },
    { id: Math.random(), icon: primeReact, label: "Prime React" },
  ],
  Backend: [
    { id: Math.random(), icon: node, label: "Node JS" },
    { id: Math.random(), icon: express, label: "Express JS" },
    { id: Math.random(), icon: mongo, label: "MongoDB" },
    { id: Math.random(), icon: sql, label: "Sql" },
  ],
  PackageManagers: [
    { id: Math.random(), icon: npm, label: "NPM Js" },
    { id: Math.random(), icon: yarn, label: "Yarn" },
    { id: Math.random(), icon: pnpm, label: "PNPM" },
  ],
  Other: [
    { id: Math.random(), icon: vscode, label: "VS Code" },
    { id: Math.random(), icon: git, label: "Git" },
    { id: Math.random(), icon: github_, label: "Git Hub" },
    { id: Math.random(), icon: bitbucket, label: "Bit Bucket" },
    { id: Math.random(), icon: postman, label: "Postman" },
    { id: Math.random(), icon: office, label: "MS Office" },
  ],
};

export {
  sideNavData,
  TopNavData,
  description,
  images,
  textList,
  MySkills,
  ContactInfo,
};
