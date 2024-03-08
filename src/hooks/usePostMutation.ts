import myAxios from "@/config/axiosConfig";
import { postSchema } from "@/schema";
import { ErrorType } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface Props {
  reset: () => void;
  refetch: () => void;
  navigate: NavigateFunction;
}

export const usePostMutation = ({ reset, refetch, navigate }: Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-post"],
    mutationFn: async (data: z.infer<typeof postSchema>) => {
      const { data: res } = await myAxios.post("/posts", data);
      return res;
    },
    onError: (error: ErrorType) => {
      toast.error(error.response.data.message);
      reset();
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Succesfully added post");
      refetch();
      navigate("/");
    },
  });
  return { mutate, isPending };
};
