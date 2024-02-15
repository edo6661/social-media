import { Search } from "lucide-react";

const MidHeader = () => {
  return (
    <>
      <div className="relative">
        <input type="text" placeholder="Search" />
        <button className="absolute right-4">
          <Search className=" text-primaryDarkGray w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default MidHeader;
