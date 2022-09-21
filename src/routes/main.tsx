import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login";
import Layout from "../layout";
import PublicPage from "../pages/public";
import ProtectedPage from "../pages/protected";
import NotFound from "../pages/notFound";

function Main() {
  let element = useRoutes([
    { path: "/login", element: <LoginPage /> },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <PublicPage /> },
        {
          path: "/protected",
          element: <ProtectedPage />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
}

export default Main;
