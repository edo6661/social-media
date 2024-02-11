export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  roles: "Admin" | "User";
  fullname?: string;
  profilePict?: string | File;
  phoneNumber?: number;
  isOauth: boolean;
  lastLogin: Date;
  bio?: string;
  social?: Social;
  createdAt: Date;
  updatedAt: Date;
}

export interface Social {
  following: UserType[];
  followers: UserType[];
  savedPosts: UserType[];
  followedTags: UserType[];
  blockedTags: UserType[];
}
