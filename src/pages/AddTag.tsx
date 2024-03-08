import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { tagSchema } from "@/schema";
import { initialTagValues } from "@/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import useInterests from "@/hooks/useInterest";
import useTags from "@/hooks/useTags";
import CustomInput from "@/components/ui/custom/CustomInput";
import { useTagMutation } from "@/hooks/useTagMutation";

export default function AddTag() {
  const navigate = useNavigate();
  const { data: interests } = useInterests();
  const { refetch } = useTags();
  const form = useForm<z.infer<typeof tagSchema>>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      ...initialTagValues,
    },
    mode: "onChange",
  });

  const { mutate, isPending } = useTagMutation({
    refetch,
    navigate,
    reset: form.reset,
  });

  const onSubmit = async (data: z.infer<typeof tagSchema>) => {
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
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified interest to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {interests?.data.map((interest) => (
                    <SelectItem key={interest._id} value={interest._id}>
                      {interest.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link to="/">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
