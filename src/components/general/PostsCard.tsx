/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import { usePostsInfinite } from "@/hooks/usePostsInfinite";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useThrottledCallback } from "use-debounce";
import PostsCardSKeleton from "../skeleton/PostsCardSkeleton";
import useUser from "@/hooks/useUser";
const PostsCard = () => {
  const { cat } = useParams();

  const [ref, inView] = useInView({});

  const {
    posts,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = usePostsInfinite(cat || "home");

  const { data: currentUser } = useUser();

  if (isError) {
    throw error;
  }

  const throttledNextPage = useThrottledCallback(fetchNextPage, 100);

  useEffect(() => {
    if (!inView || isFetchingNextPage || isFetching) {
      return;
    }
    throttledNextPage();
  }, [inView, isFetchingNextPage, isFetching]);

  const skeletonCard = <PostsCardSKeleton length={1} />;

  return (
    <>
      <div className="card-post">
        {posts && posts?.length < 0 && (
          <p className="font-bold text-5xl">empty posts</p>
        )}
        {posts?.map((post, i) => {
          return (
            <div
              className="card-inner"
              key={post._id}
              ref={i + 1 === posts.length ? ref : null}
            >
              <PostCard
                {...post}
                currentUserId={(currentUser && currentUser._id) || ""}
                cat={cat || "home"}
              />
            </div>
          );
        })}
      </div>

      {isFetching && !isFetchingNextPage ? skeletonCard : null}
      {isFetchingNextPage
        ? skeletonCard
        : hasNextPage
        ? skeletonCard
        : !isFetching && "Nothing more to load"}
    </>
  );
};

export default PostsCard;
