import { Home, RefreshCcw, TrendingUp, UploadCloud } from "lucide-react";
import { FaChartSimple } from "react-icons/fa6";
const PostsMenu = () => {
  const MockMenu = [
    {
      id: 1,
      icon: <Home />,
    },
    {
      id: 2,
      icon: <FaChartSimple />,
    },
    {
      id: 3,
      icon: <TrendingUp />,
    },
    {
      id: 4,
      icon: <RefreshCcw />,
    },
  ];
  return (
    <>
      <div className=" text-primaryDarkGray">
        {MockMenu.map((item) => (
          <div
            key={item.id}
            className="text-primaryCyan hover:text-primaryDarkBlue duration-200 transition-all  "
          >
            <span>{item.icon}</span>
          </div>
        ))}
      </div>
      <div>
        <button className="group bg-primaryCyan rounded-xl p-2 font-bold text-tertiaryWhite flex items-center gap-2 hover:bg-primaryDarkBlue transition-all duration-200">
          <span>Posting</span>
          <span>
            <UploadCloud className=" text-primaryDarkBlue group-hover:bg-primaryDarkBlue transition-all duration-200 group-hover:text-primaryCyan" />
          </span>
        </button>
      </div>
    </>
  );
};

export default PostsMenu;
