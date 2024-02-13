import { TagSubset } from "./Tag";
import { UserSubset, UserType } from "./User";

export interface PostType {
  id: string; // ! for react-query right? why not change id to _id in react query so it become one _id or id
  body: string;
  _id: string;
  userId: UserSubset | string;
  title: string;
  tags: TagSubset[] | string[];
  images?: string[] | File[];
  description?: string;
  upvotes?: {
    count: number;
    user: UserType[];
  };
  downvotes?: {
    count: number;
    user: UserType[];
  };
  commentsCount?: number;
  createdAt: Date;
  updatedAt: Date;
}
