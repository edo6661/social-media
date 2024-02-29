import Title from "../general/Title";
import { Skeleton } from "../ui/skeleton";

const SkeletonSideTags = () => {
  return (
    <div>
      <Title>Redi</Title>
      <Skeleton />
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex items-center gap-4 ">
          <Skeleton className=" w-12 h-8" />
          <div className=" space-y-2">
            <Skeleton className=" w-32 h-6" />
            <Skeleton className=" h-4 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonSideTags;
