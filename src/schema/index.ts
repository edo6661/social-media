import zod from "zod";

export const tagSchema = zod.object({
  name: zod.string().min(2, {
    message: "Name should be at least 2 characters long",
  }),
  interest: zod.string().optional(),
  description: zod.string().optional(),
});
export const interestSchema = zod.object({
  name: zod.string().min(2, {
    message: "Name should be at least 2 characters long",
  }),
  description: zod.string().optional(),
  image: zod.string().optional(),
});
export const postSchema = zod.object({
  title: zod.string().min(2, {
    message: "Title should be at least 2 characters long",
  }),
  description: zod.string().optional(),
  interest: zod.string(),
  tags: zod.array(zod.string()),
  images: zod.any(),
});
