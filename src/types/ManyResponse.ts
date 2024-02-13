interface Pagination {
  currentPage: string;
  dataPerPage: number;
  totalPages: number;
  totalData: number;
  hasNextPage: boolean;
}

interface Links {
  previous: string | null;
  next: string | null;
}

type DataType = "UserType" | "PostType" | "TagType" | "CommentType";

export interface ManyResponseType<T extends DataType> {
  data: T[];
  category?: string;
  categoryAvailable: string;
  pagination: Pagination;
  links: Links;
}
