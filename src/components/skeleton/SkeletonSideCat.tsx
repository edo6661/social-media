import { Skeleton } from "../ui/skeleton";

export default function SkeletonSideCat() {
  return Array.from({ length: 5 }, (_, i) => (
    <div key={i} className="flex items-center justify-between">
      <Skeleton className="w-[66px] h-[24px]" />
      <Skeleton className=" w-6 h-6" />
    </div>
  ));
}
