export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  roles: "Admin" | "User" | "Bot";
  fullname?: string;
  profilePict?: string;
  phoneNumber?: number;
  isOauth: boolean;
  lastLogin: Date;
  bio?: string;
  social: Social;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSubset {
  _id: string;
  username: string;
  email: string;
  profilePict?: string;
}

export interface Social {
  following: UserType[];
  followers: UserType[];
  savedPosts: UserType[];
  followedTags: UserType[];
  blockedTags: UserType[];
}
