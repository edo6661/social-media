import "@/styles/app.scss";
import { Button } from "./components/ui/button";
import AceternityCard from "./components/shared/AceternityCard";
import { APP_TITLE } from "./constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostType } from "./types/Post";
import useTitle from "./hooks/useTitle";
import useWidth from "./hooks/useWidth";
function App() {
  useTitle("Home");
  const width = useWidth();
  const {
    data: posts,
    isLoading,
    error,
    isError,
  } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data.slice(0, 2);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <nav>
        {width > 768 ? (
          <ul>
            <li>
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
          </ul>
        ) : (
          <p>test custom hook width</p>
        )}
      </nav>
      <Button>Test</Button>
      <Button variant={"ghost"}>Test Ghost</Button>
      <AceternityCard />
      <p>{APP_TITLE}</p>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
