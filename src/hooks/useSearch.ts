import myAxios from "@/config/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type SearchType = "Posts" | "Tags" | "Users";

const fetchBySeach = async (url: string) => {
  const { data } = await myAxios.get(url);
  return data;
};

export default function useSearch(search: SearchType, title?: string) {
  const url =
    search == "Posts"
      ? `/posts/search?${title}`
      : search == "Tags"
      ? `/tags/search?${title}`
      : `/users/search?${title}`;

  const { data, isError, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: () => fetchBySeach(url),
  });

  return { data, isError, error, isLoading };
}
