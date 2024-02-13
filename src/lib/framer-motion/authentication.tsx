export const transitionAuth = {
  // ! kalo mau lebih cepet
  // type: "spring",
  // stiffness: 120,
  // damping: 10,
  // ! lebih lambat dan konsisten
  duration: 0.6,
  ease: "linear",
};

const baseAuthVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.3,
  },
  inView: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const secondAuthVars = {
  ...baseAuthVars,
};

export const authVars = {
  ...baseAuthVars,
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
};
