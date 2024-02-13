export type AnimationVariant = {
  initial: {
    opacity?: number;
    x?: string;
  };
  animate: {
    opacity?: number;
    x?: number;
  };
  inView: {
    opacity: number;
  };
  exit: {
    opacity: number;
  };
};

type Transition = {
  duration: number;
  ease: string;
};

export type MotionProps = {
  variants: AnimationVariant;
  transition: Transition;
  initial: string;
  animate: string;
  whileInView: string;
  viewport: {
    once: boolean;
  };
};
