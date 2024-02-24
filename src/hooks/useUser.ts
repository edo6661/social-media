import myAxios from "@/config/axiosConfig";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const fetchUser = async () => {
    return await myAxios.get("/users/profile");
  };
  const { data, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });

  return { data, isError, error };
}
