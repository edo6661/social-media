import { UserType } from "./User";

export interface CommentType {
  _id: string;
  parentId?: string;
  userId: string;
  postId: string;
  content: string;
  image?: string;
  upvotes: {
    user: UserType[];
    count: number;
  };
  downvotes: {
    user: UserType[];
    count: number;
  };
  repliesCounts: number;
  createdAt: Date;
  updatedAt: Date;
}
