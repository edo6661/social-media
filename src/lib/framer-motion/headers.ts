export const transitionRightHeader = {
  ease: "linear",
  duration: 0.5,
};

export const rightHeaderVars = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const motionPropsRightHeader = {
  variants: rightHeaderVars,
  transition: { ...transitionRightHeader },
  initial: "initial",
  animate: "animate",
};
