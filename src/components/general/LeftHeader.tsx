import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const LeftHeader = () => {
  return (
    <>
      <button>
        <Menu className="w-[30px] h-[30px]" />
      </button>
      <Link to="/">
        <img
          src="/logoDT2.png"
          alt="logo"
          loading="lazy"
          className="w-[50px] h-[45px]"
        />
      </Link>
    </>
  );
};

export default LeftHeader;
