const transitionAuth = {
  transition: {
    type: "spring",
    // ! kalo mau lebih cepet
    // stiffness: 120,
    // damping: 10,
  },
};
export const containerAuthVars = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    ...transitionAuth,
    opacity: 0.5,
    x: 0,
  },
  inView: {
    ...transitionAuth,
    opacity: 1,
  },
};
