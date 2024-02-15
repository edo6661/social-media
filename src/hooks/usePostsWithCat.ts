import myAxios from "@/config/axiosConfig";
import { PromisePostType } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";

const usePostsWithCat = (cat: string) => {
  const fetchPostsWithCat = async () => {
    const { data } = await myAxios.get("posts?category=" + cat);
    return data as PromisePostType;
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", `category=${cat}`],
    queryFn: () => fetchPostsWithCat(),
  });

  return { posts, isLoading, isError, error };
};

export default usePostsWithCat;
