import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const location = useLocation();
  const authPath = location.pathname == "/auth";
  const conditionalLink = authPath ? "/" : "/auth";

  return (
    <header>
      <motion.div
        key={conditionalLink}
        transition={{ type: "spring" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link to={conditionalLink}>{authPath ? "Home" : "Auth"}</Link>
      </motion.div>
    </header>
  );
};

export default Header;
