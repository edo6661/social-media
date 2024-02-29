import { Skeleton } from "../ui/skeleton";

export default function PostsCardSKeleton({ length }: { length: number }) {
  return (
    <>
      <div className="card-post">
        {Array.from({ length }, (_, i) => (
          <div className="card-inner" key={i}>
            <div className="justify-between">
              <Skeleton className=" w-36 h-8" />
              <div>
                <Skeleton className=" w-5 h-5" />
                <Skeleton className=" w-5 h-5" />
              </div>
            </div>
            <Skeleton className=" h-40 w-full" />
            {/* // ! flex wrap sementara sampe rio ngasih ui mobile */}
            <div className=" space-x-2 flex-wrap">
              <Skeleton className=" w-16 h-10 rounded-2xl" />
              <Skeleton className=" w-16 h-10 rounded-2xl" />
              <Skeleton className=" w-16 h-10 rounded-2xl" />
              <Skeleton className=" w-16 h-10 rounded-2xl" />
            </div>
            <div className="post-action">
              <div className="action">
                {Array.from({ length: 4 }, (_, i) => {
                  return (
                    <div key={i}>
                      <Skeleton className=" w-7 h-6" />
                      <Skeleton className=" w-12 h-6" />
                    </div>
                  );
                })}
              </div>
              <div>
                <div>
                  <Skeleton className=" w-5 h-5" />
                  <Skeleton className=" w-11 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
