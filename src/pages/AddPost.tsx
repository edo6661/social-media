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
import { postSchema } from "@/schema";
import { initialPostValues } from "@/constant";
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
import { useState } from "react";
import { usePostMutation } from "@/hooks/usePostMutation";
import CustomInput from "@/components/ui/custom/CustomInput";
import { usePostsInfinite } from "@/hooks/usePostsInfinite";

export default function AddPost() {
  const navigate = useNavigate();
  const [isActiveTags, setIsActiveTags] = useState<Record<string, boolean>>({});
  const { refetch } = usePostsInfinite("home");
  const { data: interests } = useInterests();
  const { data: tags } = useTags();
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      ...initialPostValues,
    },
  });
  const { mutate, isPending } = usePostMutation({
    reset: form.reset,
    navigate,
    refetch,
    isActiveTags,
  });

  const onSubmit = async (data: z.infer<typeof postSchema>) => {
    mutate(data);
  };

  const handleTagClick = (id: string) =>
    setIsActiveTags((prev) => ({ ...prev, [id]: !prev[id] }));

  const { handleSubmit, control, setValue } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 max-w-2xl mx-auto"
        encType="multipart/form-data"
      >
        <CustomInput
          control={control}
          name="title"
          description="Title"
          label="title"
          placeholder="Title..."
        />
        <CustomInput
          control={control}
          name="description"
          description="Description"
          label="description"
          placeholder="Description..."
        />

        <FormField
          control={control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interests</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified interests to display" />
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
        {/* // TODO */}
        <input
          type="file"
          name="images"
          onChange={(e) => setValue("images", e.target.files!)}
          multiple
        />
        {tags?.data.map((tag) => (
          <Button
            onClick={() => handleTagClick(tag._id)}
            key={tag._id}
            variant={isActiveTags[tag._id] ? "default" : "destructive"}
            type="button"
          >
            {tag.name}
          </Button>
        ))}

        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
