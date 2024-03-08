import myAxios from "@/config/axiosConfig";
import { UserType } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const fetchUser = async () => {
    const { data } = await myAxios.get("/users/profile");
    return data;
  };
  const { data, isError, error } = useQuery<UserType>({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });

  return { data, isError, error };
}
