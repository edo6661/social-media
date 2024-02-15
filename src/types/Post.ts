import { UserType } from "./User";
// * featuring new supreme leader

export interface PostType {
  id: string;
  body: string;
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
