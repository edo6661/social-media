import { UserType } from "./User";

export interface PostType {
  _id: string;
  userId: string;
  title: string;
  tags: string[];
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
}