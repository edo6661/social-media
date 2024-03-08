export const getUserActions = (
  currentUserId: string,
  upvotes: string[],
  downvotes: string[],
  cheers: string[]
) => {
  const currentUserUpvoted = upvotes.includes(currentUserId);
  const currentUserDownvoted = downvotes.includes(currentUserId);
  const currentUserCheer = cheers.includes(currentUserId);

  const optToastUpvote = currentUserUpvoted ? "UnUpvoted" : "Upvoted";
  const optToastDownvote = currentUserDownvoted ? "UnDownvoted" : "Downvoted";
  const optToastCheer = currentUserCheer
    ? "Only one cheer per post"
    : "Cheered";

  return {
    optToastUpvote,
    optToastDownvote,
    optToastCheer,
    currentUserCheer,
    currentUserDownvoted,
    currentUserUpvoted,
  };
};
