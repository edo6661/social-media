import myAxios from "@/config/axiosConfig";
import { useInfiniteQuery } from "@tanstack/react-query";

export const usePostsInfinite = (cat: string) => {
  const fetchPost = async ({ pageParam = 1 }) => {
    const { data } = await myAxios.get(
      `posts?category=${cat}&page=${pageParam}&limit=1`
    );
    return data;
  };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ["projects", cat],
    queryFn: fetchPost,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.links.next) {
        const params = new URLSearchParams(lastPage.links.next.split("?")[1]);
        return Number(params.get("page"));
      }
    },
  });

  const posts = data?.pages.flatMap((page) => page.data);

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    posts,
    isError,
  };
};
