import myAxios from "@/config/axiosConfig";
import { interestSchema } from "@/schema";
import { ErrorType } from "@/types/Response";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface InterestMutationProps {
  refetch: () => void;
  reset: () => void;
  navigate: NavigateFunction;
}
export const useInterestMutation = ({
  refetch,
  navigate,
  reset,
}: InterestMutationProps) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-interest"],
    mutationFn: async (data: z.infer<typeof interestSchema>) => {
      const { data: res } = await myAxios.post("/interests", data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Succesfully added interest");
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
