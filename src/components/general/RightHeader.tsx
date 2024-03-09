/* eslint-disable no-unused-vars */
import { Bookmark, LogOut, Moon, Sun, User } from "lucide-react";
import { useTheme } from "../theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { motionPropsRightHeader } from "@/lib/framer-motion/headers";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks/useLogout";
import { useCurrentUserStore } from "@/lib/zustand/currentUserStore";

const RightHeader = () => {
  const { currentUser } = useCurrentUserStore((state) => state);

  const { mutate, isPending } = useLogout();
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
      {!currentUser && (
        <Link to="/auth">
          <User className="dark:text-primaryPurple text-primaryBlack" />
        </Link>
      )}
      {currentUser && (
        <div className=" bg-primaryInput rounded-full w-[40px] h-[40px] flex flex-col z-50 ">
          <Link to="/auth" className="mx-auto">
            <User className=" text-primaryDarkGray " />
          </Link>
          <div className="bg-red-500">
            <Link to="/add-post" className="mx-auto">
              <p>Add Post</p>
            </Link>
            <Link to="/add-interest" className="mx-auto">
              <p>Add Intereest</p>
            </Link>
            <Link to="/add-tag" className="mx-auto">
              <p>Add Tags</p>
            </Link>
          </div>
        </div>
      )}

      {currentUser && (
        <div className="fl-ic gap-2">
          <p>{currentUser.username}</p>
          <Button onClick={() => mutate()} disabled={isPending}>
            <LogOut />
          </Button>
        </div>
      )}
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
