import { InterestSubset } from "./Interest";
import { TagSubset } from "./Tag";
import { UserSubset } from "./User";

export interface PostType {
  id: string;
  body: string;
  _id: string;
  user: UserSubset; // * Populated makanya namanya user bukan userId
  title: string;
  interest: InterestSubset;
  tags: TagSubset[];
  images?: string[];
  description?: string;
  upvotes: string[];
  upvotesCount: number;
  downvotes: string[];
  downvotesCount: number;
  cheers: string[];
  cheersCount: number;
  commentsCount?: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Pagination {
  currentPage: string;
  dataPerPage: number;
  hasNextPage: boolean;
  totalData: number;
  totalPages: number;
}

interface TypeLinks {
  next?: string;
  prev?: string;
}

export interface PromisePostType {
  category: string;
  data: PostType[];
  links: TypeLinks;
  pagination: Pagination;
  categoryAvailable: string;
}
