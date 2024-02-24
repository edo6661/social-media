import { Search } from "lucide-react";

const MidHeader = () => {
  const mockSelect = ["Posts", "Tags", "Users"];
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {};
  return (
    <>
      <div className="relative">
        <input type="text" placeholder="Search" />
        <button className="absolute right-4">
          <Search className=" text-primaryDarkGray w-5 h-5" />
        </button>
      </div>
      <select className="text-black" onChange={handleSelectChange}>
        {mockSelect.map((val, i) => {
          return (
            <option key={i} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default MidHeader;
