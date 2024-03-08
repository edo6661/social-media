import { upperFirst } from "@/helpers";
import { PostType } from "@/types/Post";
import { MoreVertical, X } from "lucide-react";
import ActionsPosts from "./ActionsPosts";
import PostsTags from "./PostsTags";
import { motion } from "framer-motion";
import { useState } from "react";

interface PostCardProps extends PostType {
  currentUserId: string;
  cat: string;
}

const PostCard = ({
  title,
  images,
  _id,
  currentUserId,
  upvotes,
  cat,
  downvotes,
  cheers,
}: PostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const vars = {
    start: {
      filter: "blur(5px)",
    },
    exit: {
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <div className="justify-between">
        <h4 className="font-medium">{upperFirst(title)}</h4>
        <div>
          <MoreVertical />
          <X />
        </div>
      </div>
      <motion.img
        src={images && images[0]}
        alt={title}
        variants={vars}
        animate={isHovered ? "start" : "exit"}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className=" object-cover "
      />
      {/* // ! flex wrap sementara sampe rio ngasih ui mobile */}
      <div className=" space-x-2flex-wrap">
        <PostsTags />
      </div>
      <div className="post-action">
        <ActionsPosts
          cat={cat}
          upvotes={upvotes}
          downvotes={downvotes}
          cheers={cheers}
          _id={_id}
          currentUserId={currentUserId}
        />
      </div>
    </>
  );
};

export default PostCard;
