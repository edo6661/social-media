import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { interestSchema } from "@/schema";
import { initialInterestValues } from "@/constant";
import { useNavigate } from "react-router-dom";
import useInterests from "@/hooks/useInterest";
import CustomInput from "@/components/ui/custom/CustomInput";
import { useInterestMutation } from "@/hooks/useInterestMutation";

export default function AddInterest() {
  const { refetch } = useInterests();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof interestSchema>>({
    resolver: zodResolver(interestSchema),
    defaultValues: {
      ...initialInterestValues,
    },
  });

  const { mutate, isPending } = useInterestMutation({
    refetch,
    navigate,
    reset: form.reset,
  });

  const onSubmit = async (data: z.infer<typeof interestSchema>) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <CustomInput
          control={form.control}
          name="name"
          label="name"
          placeholder="name"
          description="This is your public display name."
        />
        <CustomInput
          control={form.control}
          name="description"
          label="description"
          placeholder="description"
          description="This is your public display description."
        />
        <CustomInput
          control={form.control}
          name="image"
          label="image"
          placeholder="image"
          description="This is your public display image."
        />
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
