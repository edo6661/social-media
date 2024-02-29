import { Bookmark, Moon, Sun, User } from "lucide-react";
import { useTheme } from "../theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { motionPropsRightHeader } from "@/lib/framer-motion/headers";
import { Link } from "react-router-dom";

const RightHeader = () => {
  const { setTheme, theme } = useTheme();

  const isLight = theme === "light";

  const conTheme = isLight ? (
    <Sun className=" text-primaryRed" />
  ) : (
    <Moon className="text-primaryCyan" />
  );

  const toggleTheme = () => setTheme(isLight ? "dark" : "light");

  const reuseableEl = (
    <motion.div className="right" {...motionPropsRightHeader}>
      <button onClick={() => toggleTheme()}>{conTheme}</button>
      <Bookmark className="dark:text-primaryPurple text-primaryBlack" />
      <div className=" bg-primaryInput rounded-full w-[40px] h-[40px] ">
        <Link to="/auth" className="mx-auto">
          <User className=" text-primaryDarkGray " />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence initial={false}>
        {isLight && reuseableEl}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!isLight && reuseableEl}
      </AnimatePresence>
    </>
  );
};

export default RightHeader;
