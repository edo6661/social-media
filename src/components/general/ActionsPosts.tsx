import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react";
import { MdOutlineInsertComment, MdShare } from "react-icons/md";
import { FaGlassCheers } from "react-icons/fa";
import { useUpvoteMutation } from "@/hooks/useUpvoteMutation";
import { useDownvoteMutation } from "@/hooks/useDownvoteMutation";
import { useCheerMutation } from "@/hooks/useCheerMutation";
import { getUserActions } from "@/helpers/action";

interface Props {
  _id: string;
  currentUserId: string;
  upvotes: string[];
  cat: string;
  downvotes: string[];
  cheers: string[];
}

const ActionsPosts = ({
  _id,
  currentUserId,
  upvotes,
  cat,
  downvotes,
  cheers,
}: Props) => {
  const {
    currentUserCheer,
    currentUserDownvoted,
    currentUserUpvoted,
    optToastUpvote,
    optToastDownvote,
    optToastCheer,
  } = getUserActions(currentUserId, upvotes, downvotes, cheers);

  const { mutate: onUpvote, isPending: isPendingUpvote } = useUpvoteMutation(
    _id,
    optToastUpvote,
    cat
  );
  const { mutate: onDownvote, isPending: isPendingDownvote } =
    useDownvoteMutation(_id, optToastDownvote, cat);
  const { mutate: onCheer, isPending: isPendingCheer } = useCheerMutation(
    _id,
    optToastCheer,
    cat
  );
  // const handleDelete = () => {
  //   myAxios
  //     .delete(`posts/${_id}`)
  //     .then(() => {
  //       toast.success("deleted");
  //       queryClient.invalidateQueries({
  //         queryKey: ["posts", "home"],
  //       });
  //     })
  //     .catch((err) => toast.error(err.message));
  // };

  const MockActions = [
    {
      icon: (
        <ThumbsUp
          color={
            !isPendingUpvote ? (currentUserUpvoted ? "cyan" : "gray") : "gray"
          }
        />
      ),
      label: upvotes.length,
      onClick: () => {
        onUpvote();
      },
    },
    {
      icon: (
        <ThumbsDown
          color={
            !isPendingDownvote
              ? currentUserDownvoted
                ? "cyan"
                : "gray"
              : "gray"
          }
        />
      ),
      label: downvotes.length,
      onClick: () => {
        onDownvote();
      },
    },
    {
      icon: <MdOutlineInsertComment />,
      label: "Comments",
      // onClick: () => {
      //   handleDelete();
      // },
    },
    { icon: <Bookmark />, label: "Save" },
    {
      icon: (
        <FaGlassCheers
          color={
            !isPendingCheer ? (currentUserCheer ? "cyan" : "gray") : "gray"
          }
        />
      ),
      label: cheers.length,
      onClick: () => {
        onCheer();
      },
    },
  ];
  return (
    <>
      <div className="action">
        {MockActions.map((action, index) => (
          <div key={index}>
            <button
              className=" appearance-none"
              onClick={action.onClick}
              disabled={isPendingUpvote}
            >
              {action.icon}
            </button>
            <span>{action.label}</span>
          </div>
        ))}
      </div>
      <div>
        <div>
          <MdShare />
          <span>Share</span>
        </div>
      </div>
    </>
  );
};

export default ActionsPosts;
