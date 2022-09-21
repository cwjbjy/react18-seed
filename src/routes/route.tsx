import { lazy } from "react";

const LoginPage = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ "@/pages/login")
);
const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ "@/layout"));
const PublicPage = lazy(
  () => import(/* webpackChunkName: "PublicPage" */ "@/pages/public")
);
const ProtectedPage = lazy(
  () => import(/* webpackChunkName: "ProtectedPage" */ "@/pages/protected")
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ "@/pages/notFound")
);

const route = [
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
];

export default route;
