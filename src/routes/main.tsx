import { useRoutes } from "react-router-dom";
//@ts-ignore
import route from "./route-APP_TARGET";

function Main() {
  const element = useRoutes(route);

  return element;
}

export default Main;
