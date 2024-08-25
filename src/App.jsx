import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { RoutesComponents } from "./Routes/Routes";

const App = () => {
  return (
    <Layout>
      <Routes>
        {RoutesComponents.map(({ component, path }) => (
          <Route
            key={path}
            path={path}
            exact={true}
            element={component}
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
