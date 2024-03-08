import myAxios from "@/config/axiosConfig";
import { ErrorType } from "@/types/Response";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCheerMutation = (
  _id: string,
  optToast: string,
  cat: string
) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["upvote", _id, cat],
    mutationFn: async () => {
      await myAxios.patch(`posts/cheers/${_id}`);
    },
    onSuccess: () => {
      toast.success(optToast);
      queryClient.invalidateQueries({
        queryKey: ["posts", cat],
      });
    },
    onError: (error: ErrorType) => {
      toast.error(error.response.data.message);
    },
  });
  return { mutate, isPending };
};
