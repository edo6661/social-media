import { Search } from "lucide-react";
import "./dika.css";
const HeaderDika = () => {
  return (
    <nav className="navbar">
      <div className="first">
        <div className="event-left">
          <a href="">Seller Centre</a>
          <a href="">Seller Centre</a>
          <a href="">Seller Centre</a>
        </div>
        <div className="event-right">
          <a href="">Notifikasi</a>
          <a href="">Notifikasi</a>
          <a href="">Notifikasi</a>
          <a href="">Notifikasi</a>
        </div>
      </div>
      <div className="second">
        <div className="left">
          <p>SHopeetod</p>
        </div>
        <div className="mid">
          <div className="searchbar">
            <input type="text" />
            <button>
              <Search />
            </button>
          </div>
          <div className="event">
            <a href="#">Kimono Custom</a>
            <a href="#">Kimono Custom</a>
            <a href="#">Kimono Custom</a>
            <a href="#">Kimono Custom</a>
            <a href="#">Kimono Custom</a>
            <a href="#">Kimono Custom</a>
          </div>
        </div>
        <div className="right">
          <button>Shop</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDika;
