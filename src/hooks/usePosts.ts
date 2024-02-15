import myAxios from "@/config/axiosConfig";
import { PromisePostType } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  const fetchPosts = async () => {
    const { data } = await myAxios.get("posts");
    return data as PromisePostType;
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  return { posts, isLoading, isError, error };
};

export default usePosts;
