import { About, Skills, Experience, Projects, Education,MyResume } from "../components";

const RoutesComponents = [
  {
    path: "/",
    Component: About,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/about/myResume",
    Component: MyResume,
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
