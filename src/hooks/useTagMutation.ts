import myAxios from "@/config/axiosConfig";
import { tagSchema } from "@/schema";
import { ErrorType } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface TagMutationProps {
  refetch: () => void;
  reset: () => void;
  navigate: NavigateFunction;
}
export const useTagMutation = ({
  refetch,
  navigate,
  reset,
}: TagMutationProps) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-tag"],
    mutationFn: async (data: z.infer<typeof tagSchema>) => {
      const { data: res } = await myAxios.post("/tags", data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Succesfully added Tag");
      refetch();
      navigate("/");
    },
    onError: (error: ErrorType) => {
      toast.error(error.response.data.message);
      reset();
    },
  });
  return { mutate, isPending };
};
