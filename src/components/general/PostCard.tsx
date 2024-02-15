import { upperFirst } from "@/helpers";
import { PostType } from "@/types/Post";
import { MoreVertical, X } from "lucide-react";
import ActionsPosts from "./ActionsPosts";
import PostsTags from "./PostsTags";

const PostCard = ({ title }: PostType) => {
  return (
    <div className="card-inner">
      <div className="justify-between">
        <h4 className="font-medium">{upperFirst(title)}</h4>
        <div>
          <MoreVertical />
          <X />
        </div>
      </div>
      <img src="/posts.png" alt={title} />
      <div className=" space-x-2">
        <PostsTags />
      </div>
      <div className="post-action">
        <ActionsPosts />
      </div>
    </div>
  );
};

export default PostCard;
