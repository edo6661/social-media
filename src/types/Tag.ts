export interface TagType {
  _id: string;
  name: string;
  posts: string[];
  description?: string;
  postsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TagSubset {
  _id: string;
  name: string;
}
