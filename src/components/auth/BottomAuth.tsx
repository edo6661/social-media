import { MotionProps } from "@/types/Auth";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  motionProps: MotionProps;
  isInRegister: boolean;
  handleIsInRegister: () => void;
}
const BottomAuth = ({
  motionProps,
  isInRegister,
  handleIsInRegister,
}: Props) => {
  const conBottomEl = (
    <motion.div className="container-signup " {...motionProps}>
      <p className="  text-primaryBlack">
        {!isInRegister
          ? "Don’t have an account yet?"
          : "Already have an account?"}
      </p>
      <button
        className={isInRegister ? "text-primaryBlue" : "text-primaryRed"}
        onClick={handleIsInRegister}
      >
        {!isInRegister ? "Sign up" : "Login"}
      </button>
    </motion.div>
  );
  const conBottomAnimated = (
    <>
      <AnimatePresence>{isInRegister && conBottomEl}</AnimatePresence>
      <AnimatePresence>{!isInRegister && conBottomEl}</AnimatePresence>
    </>
  );
  return conBottomAnimated;
};

export default BottomAuth;
