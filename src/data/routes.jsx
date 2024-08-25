import {
  aboutMe,
  skills,
  project,
  education,
  exp,
} from "../assets/svgs";
import { generateId } from "../utils/generateId";

export const routes = [
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
