import { Suspense } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PrivareRoute from "../routes/privareRoute";

function Layout() {
  const navigation = useNavigate();
  const out = () => {
    localStorage.removeItem("username");
    navigation("/login");
  };
  return (
    <div>
      <button onClick={out}>退出</button>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <PrivareRoute>
          <Outlet />
        </PrivareRoute>
      </Suspense>
    </div>
  );
}

export default Layout;
