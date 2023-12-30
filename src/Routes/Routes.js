import { About, Skills, Experience, Projects, Education } from "../components";

const RoutesComponents = [
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/skills",
    Component: Skills,
  },
  {
    path: "/experience",
    Component: Experience,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/education",
    Component: Education,
  },
];

export { RoutesComponents };
