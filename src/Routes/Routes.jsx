import {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  MyResume,
  Awards
} from "../components";
import { Navigate } from "react-router-dom";

const RoutesComponents = [
  {
    path: "/",
    component: <Navigate to="/about" replace={true} />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/about/myResume",
    component: <MyResume />,
  },
  {
    path: "/skills",
    component: <Skills />,
  },
  {
    path: "/experience",
    component: <Experience />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/education",
    component: <Education />,
  },
  {
    path: "/awards",
    component: <Awards />,
  },
];

export { RoutesComponents };
