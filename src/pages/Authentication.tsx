/* eslint-disable react-hooks/exhaustive-deps */
import "@/styles/auth.scss";
import { motion } from "framer-motion";
import { useGlobalState } from "@/lib/zustand";
import { useEffect, useState } from "react";
import {
  authVars,
  secondAuthVars,
  transitionAuth,
} from "@/lib/framer-motion/authentication";
import FormAuth from "@/components/auth/FormAuth";
import AnimatedImageAuth from "@/components/auth/AnimatedImageAuth";
import BottomAuth from "@/components/auth/BottomAuth";
import TitleAuth from "@/components/auth/TitleAuth";

const Authentication = () => {
  const { isAnimatedAuth, setIsAnimatedAuth } = useGlobalState(
    (state) => state
  );
  const conditionalAnimation = isAnimatedAuth ? secondAuthVars : authVars;

  const [isInRegister, setIsInRegister] = useState(false);
  const handleIsInRegister = () => setIsInRegister((prev) => !prev);

  const motionProps = {
    variants: conditionalAnimation,
    transition: { ...transitionAuth },
    initial: "initial",
    animate: "animate",
    whileInView: "inView",
    viewport: { once: true },
    // ! minta saran fario tentang props ini
    // layout: true,
  };

  useEffect(() => setIsAnimatedAuth(true), []);

  return (
    <>
      <motion.section className="container" {...motionProps}>
        <div className="auth-container">
          <article className=" auth-img-container">
            <AnimatedImageAuth
              variants={conditionalAnimation}
              isInRegister={isInRegister}
            />
          </article>
          <article className="spesific-auth">
            <TitleAuth />
            <FormAuth motionProps={motionProps} isInRegister={isInRegister} />
            <BottomAuth
              motionProps={motionProps}
              isInRegister={isInRegister}
              handleIsInRegister={handleIsInRegister}
            />
          </article>
        </div>
      </motion.section>
    </>
  );
};

export default Authentication;
