import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const authPath = location.pathname == "/auth";
  const conditionalLink = authPath ? "/" : "/auth";
  return (
    <header>
      <Link to={conditionalLink}>{authPath ? "Home" : "Auth"}</Link>
    </header>
  );
};

export default Header;
