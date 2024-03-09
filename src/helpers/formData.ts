import { postSchema } from "@/schema";
import { z } from "zod";

export const createFormDataPost = (
  data: z.infer<typeof postSchema>,
  isActiveTags: Record<string, boolean>
) => {
  const { images, ...otherData } = data;
  const formData = new FormData();

  // ! harus pake array from karena file list itu mirip array tapi bukan array sebenernya (dari bing)
  Array.from(images).forEach((image) => {
    if (image instanceof File) {
      // ! key images, value image
      formData.append("images", image);
    }
  });
  // ! pake object.entries agar dapet pasang key dan value nya semua other data, kalo value nya array bakal di foreach
  Object.entries(otherData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        // ! karena tags doang yang value nya itu array yang perlu di forEach
        if (key === "tags" && val !== "") {
          formData.append(key, val);
        }
      });
    } else {
      formData.append(key, value);
    }
  });
  const tags = Object.keys(isActiveTags).filter((key) => isActiveTags[key]);
  tags.forEach((tag) => {
    if (tag !== "") {
      formData.append("tags", tag);
    }
  });
  return formData;
};
