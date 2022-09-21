import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes/main";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </BrowserRouter>
  );
}
