import { Routes, Route, useLocation } from "react-router-dom";
import { routes, authRoutes } from "./utils";
import { Aside } from "./layouts";
import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  const navIncludePages = ["/", "/favourites"];
  const adminNavIncludePages = ["/products", "/categories"];

  return (
    <div className="main__layout">
      {navIncludePages.includes(location.pathname) ||
      (auth.isAuthenticated &&
        adminNavIncludePages.includes(location.pathname)) ? (
        <Aside />
      ) : null}
      <Routes>
        {routes.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
        {auth.isAuthenticated &&
          authRoutes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
      </Routes>
      <div className="modals"></div>
    </div>
  );
};

export default App;
