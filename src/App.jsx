import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutesComponents } from "./Routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {RoutesComponents.map(({ Component, path }) => (
            <Route
              key={path}
              path={path}
              exact={true}
              element={<Component />}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
