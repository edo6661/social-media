import App from "@/App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "@/pages/Authentication";
import Homepage from "@/pages/Homepage";
import PostsCat from "@/pages/PostsCat";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/category/:cat" element={<PostsCat />} />
      </Route>
    </>
  )
);

export default router;
