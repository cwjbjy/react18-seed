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
      <PrivareRoute>
        <Outlet />
      </PrivareRoute>
    </div>
  );
}

export default Layout;
