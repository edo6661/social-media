import { AnimatePresence, motion } from "framer-motion";
import { transitionAuth } from "@/lib/framer-motion/authentication";
import { AnimationVariant } from "@/types/Auth";

interface Props {
  variants: AnimationVariant;
  isInRegister: boolean;
}

const AnimatedImageAuth = ({ variants, isInRegister }: Props) => {
  const src = isInRegister ? "/auth-register.png" : "/auth-login.png";

  const conImg = (
    <motion.img
      key={src}
      src={src}
      alt="auth"
      loading="lazy"
      variants={variants}
      transition={{ ...transitionAuth }}
      initial="initial"
      animate="animate"
      whileInView="inView"
      viewport={{ once: true }}
    />
  );
  const elImgAnimated = (
    <>
      <AnimatePresence>{isInRegister && conImg}</AnimatePresence>
      <AnimatePresence>{!isInRegister && conImg}</AnimatePresence>
    </>
  );

  return elImgAnimated;
};

export default AnimatedImageAuth;
