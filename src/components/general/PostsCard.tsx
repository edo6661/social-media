/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import { usePostsInfinite } from "@/hooks/usePostsInfinite";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useThrottledCallback } from "use-debounce";
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
  } = usePostsInfinite(cat || "Home");
  if (isError) {
    throw error;
  }

  const throttledNextPage = useThrottledCallback(fetchNextPage, 1000);

  useEffect(() => {
    if (!inView || isFetchingNextPage || isFetching) {
      return;
    }
    throttledNextPage();
    // ! gaperlu di abort fetchNextData nya karena fetchNextPage itu built in function dari react-query, jadi dia udah punya built in aborting i guess?
  }, [inView, isFetchingNextPage, isFetching]);

  return (
    <>
      {/* {isLoading && <PostsCardSkeleton length={posts?.data.length || 5} />} */}
      <div className="card-post">
        {posts?.map((post, i) => {
          return (
            <div
              className="card-inner"
              key={post._id}
              ref={i + 1 === posts.length ? ref : null}
            >
              <PostCard {...post} />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : !isFetching && "Nothing more to load"}
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default PostsCard;
