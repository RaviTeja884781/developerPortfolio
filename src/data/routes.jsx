import {
  aboutMe,
  skills,
  project,
  education,
  exp,
  award,
} from "../assets/svgs";
import { generateId } from "../utils/generateId";

export const routes = [
  {
    id: generateId(),
    label: "About Me",
    path: "/about",
    icons: aboutMe,
  },
  {
    id: generateId(),
    label: "Skills",
    path: "/skills",
    icons: skills,
  },
  {
    id: generateId(),
    label: "Experience",
    path: "/experience",
    icons: exp,
  },
  {
    id: generateId(),
    label: "Projects",
    path: "/projects",
    icons: project,
  },
  {
    id: generateId(),
    label: "Education",
    path: "/education",
    icons: education,
  },
  {
    id: generateId(),
    label: "Awards",
    path: "/awards",
    icons: award,
  },
];
