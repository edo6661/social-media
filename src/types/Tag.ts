export interface TagType {
  _id: string;
  name: string;
  posts: string[];
  description?: string;
  postsCount: number;
}

export interface TagSubset {
  _id: string;
  name: string;
}
