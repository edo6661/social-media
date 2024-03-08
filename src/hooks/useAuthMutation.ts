import myAxios from "@/config/axiosConfig";
import { useCurrentUserStore } from "@/lib/zustand/currentUserStore";
import { ErrorType } from "@/types/Response";
import { UserType } from "@/types/User";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

interface AuthMutationProps {
  reqPath: string;
  optToast: string;
  isInRegister: boolean;
  setIsInRegister: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
  navigate: NavigateFunction;
}

const useAuthMutation = ({
  reqPath,
  optToast,
  isInRegister,
  setIsInRegister,
  reset,
  navigate,
}: AuthMutationProps) => {
  // const { setCurrentUser } = useGlobalState((state) => state);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: Partial<UserType>) => {
      const { data: res } = await myAxios.post(reqPath, data);
      console.log(res);
      return res;
    },
    onError: (error: ErrorType) => {
      toast.error(error.response.data.message);
      reset();
    },
    onSuccess: (data) => {
      toast.success(optToast);
      if (isInRegister) {
        return setIsInRegister(false);
      }
      setCurrentUser(data.data as UserType);

      reset();
      navigate("/");
    },
  });

  return { mutate, isPending };
};

export default useAuthMutation;
