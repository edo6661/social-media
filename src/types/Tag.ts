export interface TagType {
  _id: string;
  name: string;
  interest?: string;
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
