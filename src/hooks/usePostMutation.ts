import myAxios from "@/config/axiosConfig";
import { createFormDataPost } from "@/helpers/formData";
import { postSchema } from "@/schema";
import { ErrorType } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface Props {
  reset: () => void;
  navigate: NavigateFunction;
  isActiveTags: Record<string, boolean>;
  refetch: () => void;
}

export const usePostMutation = ({
  reset,
  navigate,
  isActiveTags,
  refetch,
}: Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-post"],
    mutationFn: async (data: z.infer<typeof postSchema>) => {
      const formData = createFormDataPost(data, isActiveTags);

      const { data: res } = await myAxios.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    },
    onError: (error: ErrorType) => {
      toast.error(error.response.data.message);
      reset();
    },
    onSuccess: (data) => {
      toast.success(data.message);

      refetch();
      navigate("/");
    },
  });
  return { mutate, isPending };
};
