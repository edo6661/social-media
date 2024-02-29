import App from "@/App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "@/pages/Authentication";
import Homepage from "@/pages/Homepage";
import PostsCat from "@/pages/PostsCat";
import User from "@/pages/User";
import Tags from "@/pages/Tags";
import Users from "@/pages/Users";
import Search from "@/pages/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/category/:cat" element={<PostsCat />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </>
  )
);

export default router;
