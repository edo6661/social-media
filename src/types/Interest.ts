import { Pagination, TypeLinks } from "./Post";

export interface InterestType {
  _id: string;
  name: string;
  image: string;
  description?: string;
  tagsCount: number;
  postsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResponseInterestType {
  data: InterestType[];
  links: TypeLinks;
  pagination: Pagination;
}

export interface InterestSubset {
  _id: string;
  name: string;
  image: string;
}
