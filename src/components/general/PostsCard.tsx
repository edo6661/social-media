import usePostsWithCat from "@/hooks/usePostsWithCat";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import useTitle from "@/hooks/useTitle";
import PostsCardSkeleton from "../skeleton/PostsCardSkeleton";
const PostsCard = () => {
  const { cat } = useParams();

  const { posts, isLoading } = usePostsWithCat(cat || "Home");

  useTitle(cat || "Home");

  return (
    <>
      {/* <PostsCardSkeleton length={posts?.data.length || 5} /> */}
      {isLoading && <PostsCardSkeleton length={posts?.data.length || 5} />}
      <div className="card-post">
        {posts?.data.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
    </>
  );
};

export default PostsCard;
