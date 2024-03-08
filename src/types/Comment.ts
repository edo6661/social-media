import { UserSubset } from "./User";

export interface CommentType {
  _id: string;
  parentId?: string;
  user: UserSubset;
  postId: string;
  content: string;
  image?: string;
  upvotesCount: number;
  downvotesCount: number;
  repliesCounts: number;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
}
