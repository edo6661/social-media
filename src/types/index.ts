import { Pagination, TypeLinks } from "./Post";

interface TypePagiLinks {
  links: TypeLinks;
  pagination: Pagination;
}
export interface ResponseType<T> extends TypePagiLinks {
  data: T[];
}
