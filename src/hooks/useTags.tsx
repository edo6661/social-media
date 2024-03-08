import myAxios from "@/config/axiosConfig";
import { ResponseType } from "@/types";
import { TagType } from "@/types/Tag";
import { useQuery } from "@tanstack/react-query";

export default function useTags() {
  const fetchTags = async () => {
    const { data } = await myAxios.get("tags");
    return data;
  };
  const { data, isError, error, refetch } = useQuery<ResponseType<TagType>>({
    queryKey: ["tags"],
    queryFn: () => fetchTags(),
  });

  return { data, isError, error, refetch };
}
