import { useRoutes } from "react-router-dom";
import route from "./route";

function Main() {
  const element = useRoutes(route);

  return element;
}

export default Main;
