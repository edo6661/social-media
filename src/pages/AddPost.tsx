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
import { Input } from "@/components/ui/input";
import { postSchema } from "@/schema";
import { initialPostValues } from "@/constant";
import myAxios from "@/config/axiosConfig";
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
import { usePostsInfinite } from "@/hooks/usePostsInfinite";
import { toast } from "sonner";

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

  const onSubmit = async (data: z.infer<typeof postSchema>) => {
    const mockData = {
      ...data,
      tags: Object.keys(isActiveTags).filter((key) => isActiveTags[key]),
    };
    console.log(mockData);

    try {
      await myAxios.post("/posts", mockData);
      toast.success("Succesfully added post");
      refetch();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagClick = (id: string) =>
    setIsActiveTags((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-2xl mx-auto"
        encType="multipart/form-data"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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
          onChange={(e) => form.setValue("images", e.target.files!)}
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
