import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
  children: ReactElement;
}

const PrivareRoute: FC<Props> = ({ children }) => {
  let location = useLocation();

  const username = localStorage.getItem("username");

  if (!username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivareRoute;
