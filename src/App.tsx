import { BrowserRouter } from "react-router-dom";
import Main from "./routes/main";

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
