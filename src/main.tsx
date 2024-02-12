import ReactDOM from "react-dom/client";
import "./index.css";
import Providers from "./providers/Providers.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./route/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
