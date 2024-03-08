/* eslint-disable no-unused-vars */
import myAxios from "@/config/axiosConfig";
import { useCurrentUserStore } from "@/lib/zustand/currentUserStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLogout = () => {
  // const { setCurrentUser } = useGlobalState((state) => state);
  const setCurrentUser = useCurrentUserStore((store) => store.setCurrentUser);
  const { mutate, isPending } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      await myAxios.post("/auth/logout");
      setCurrentUser(null);
      toast.success("Logout success");
    },
  });

  return { mutate, isPending };
};
