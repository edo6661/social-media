import "@/styles/header.scss";
import RightHeader from "./RightHeader";
import MidHeader from "./MidHeader";
import LeftHeader from "./LeftHeader";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <LeftHeader />
        </div>
        <div className="mid">
          <MidHeader />
        </div>

        <RightHeader />
      </nav>
    </header>
  );
};

export default Header;
