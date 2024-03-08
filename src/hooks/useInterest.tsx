import myAxios from "@/config/axiosConfig";
import { ResponseType } from "@/types";
import { InterestType } from "@/types/Interest";
import { useQuery } from "@tanstack/react-query";

export default function useInterests() {
  const fetchInterests = async () => {
    const { data } = await myAxios.get("interests");
    return data;
  };
  const { data, isError, error, refetch } = useQuery<
    ResponseType<InterestType>
  >({
    queryKey: ["interests"],
    queryFn: () => fetchInterests(),
  });

  return { data, isError, error, refetch };
}
