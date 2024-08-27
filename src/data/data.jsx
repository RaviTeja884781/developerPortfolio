import { ColouredIcons } from "react-ui-essentials-icons";
const { GithubOctocat, Linkedin } = ColouredIcons;
import {
  aboutMe,
  skills,
  project,
  education,
  exp,
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
} from "../assets/svgs";
import { img3, img1, jsp, cutm, sric, alluri } from "../assets/images";
import { generateId } from "../utils/generateId";

const sideNavData = [
  {
    id: generateId(),
    label: "About Me",
    path: "/about",
    icon: aboutMe,
  },
  {
    id: generateId(),
    label: "Skills",
    path: "/skills",
    icon: skills,
  },
  {
    id: generateId(),
    label: "Experience",
    path: "/experience",
    icon: exp,
  },
  {
    id: generateId(),
    label: "Projects",
    path: "/projects",
    icon: project,
  },
  {
    id: generateId(),
    label: "Education",
    path: "/education",
    icon: education,
  },
];

const TopNavData = [
  {
    id: generateId(),
    icon: <GithubOctocat width="20px" height="20px" />,
    path: "https://github.com/RaviTeja884781",
  },
  {
    id: generateId(),
    icon: <Linkedin width="20px" height="20px" />,
    path: "https://www.linkedin.com/in/ravi-teja-2a2989145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
];

let description = [
  {
    id: generateId(),
    desc: "As a React.js frontend developer, I specialize in creating dynamic and intuitive user interfaces. My expertise lies in transforming design mockups into responsive, engaging UI components, consistently delivering high-quality web applications.",
  },
  {
    id: generateId(),
    desc: "I excel at leveraging React.js frameworks and libraries to develop scalable, modular code. This approach ensures application maintainability and performance. My experience includes successful collaboration with cross-functional teams, including designers, backend developers, and product managers, to create seamless user experiences and meet project objectives.",
  },
  {
    id: generateId(),
    desc: "Throughout my career, I've maintained a passion for staying current with industry trends and best practices. My deep understanding of JavaScript, HTML, and CSS enables me to implement cutting-edge features and optimize website performance effectively.",
  },
  {
    id: generateId(),
    desc: "My strong problem-solving skills allow me to tackle complex challenges and devise innovative solutions, resulting in efficient and elegant code. As a self-motivated professional, I thrive in fast-paced environments. My excellent communication skills foster effective collaboration and knowledge sharing within teams.",
  },
  {
    id: generateId(),
    desc: "I'm passionate about creating exceptional user experiences and driving positive impact through technology. Always eager to take on new projects, I'm ready to contribute my expertise to deliver top-notch solutions. I welcome connections on LinkedIn to explore potential collaborations or discuss the exciting world of React.js frontend development.",
  },
];

const images = [img3, img1];

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
    { id: generateId(), icon: react, label: "React" },
    { id: generateId(), icon: redux, label: "Redux" },
    { id: generateId(), icon: html, label: "Html" },
    { id: generateId(), icon: css, label: "Css" },
    { id: generateId(), icon: scss, label: "Scss" },
    { id: generateId(), icon: js, label: "JavaScript" },
    { id: generateId(), icon: java, label: "Java" },
    { id: generateId(), icon: reactBootstrap, label: "React Bootstrap" },
    { id: generateId(), icon: bootstrap, label: "Bootstrap" },
    { id: generateId(), icon: materialUi, label: "Material UI" },
    { id: generateId(), icon: primeReact, label: "Prime React" },
  ],
  Backend: [
    { id: generateId(), icon: node, label: "Node JS" },
    { id: generateId(), icon: express, label: "Express JS" },
    { id: generateId(), icon: mongo, label: "MongoDB" },
    { id: generateId(), icon: sql, label: "Sql" },
  ],
  PackageManagers: [
    { id: generateId(), icon: npm, label: "NPM Js" },
    { id: generateId(), icon: yarn, label: "Yarn" },
    { id: generateId(), icon: pnpm, label: "PNPM" },
  ],
  Other: [
    { id: generateId(), icon: vscode, label: "VS Code" },
    { id: generateId(), icon: git, label: "Git" },
    { id: generateId(), icon: github_, label: "Git Hub" },
    { id: generateId(), icon: bitbucket, label: "Bit Bucket" },
    { id: generateId(), icon: postman, label: "Postman" },
    { id: generateId(), icon: office, label: "MS Office" },
  ],
};

const EducationInfo = [
  {
    id: generateId(),
    institutionName: "JSpiders Software Training Organisation",
    period: " - 6 Months",
    stream: "MERN Stack",
    grade: "",
    icon: jsp,
    desc: "On April 18th, I enrolled in the Full Stack Web Development course at Jspiders in Bangalore. Over six months of intensive study and practical application, I successfully completed the program with a focus on industry-standard practices. This comprehensive training provided me with a deep understanding of the MERN (MongoDB, Express.js, React.js, Node.js) stack, while also refining my skills in core web technologies like HTML, CSS, and JavaScript. The rigorous curriculum and hands-on experience ensured I developed crystal-clear concepts in all aspects of full-stack development, leaving me well-equipped to tackle professional application development challenges with confidence and competence.",
  },
  {
    id: generateId(),
    institutionName: "Centurion University of Technology and Management",
    period: " - 2016 - 2020",
    stream: "B.Tech in ME",
    grade: "8.1 cgpa",
    icon: cutm,
    desc: "Completed my Bachelor of Technology in Mechanical Engineeringat at Centurion University of Technology and Management,Paralakhemundi,Odisha",
  },
  {
    id: generateId(),
    institutionName: "sri chaitanya junior collage",
    period: " - 2015 - 2016",
    stream: "12th",
    grade: "89.6%",
    icon: sric,
    desc: "Completed my class 12th education at Sri Chaitanya Junior Collage,Vishakapatanam,Andhra Pradesh",
  },
  {
    id: generateId(),
    institutionName: "ALLURI SITA RAMARAJU PUBLIC SCHOOL",
    period: " - 2008 - 2014",
    stream: "4th to 10th",
    grade: "7.6cgpa",
    icon: alluri,
    desc: "Completed my class 10 education at ALLURI SITA RAMARAJU PUBLIC SCHOOL,ARAKU VALLEY, where I studied class 4th to 10th.",
  },
];

export {
  sideNavData,
  TopNavData,
  description,
  images,
  textList,
  MySkills,
  ContactInfo,
  EducationInfo,
};
