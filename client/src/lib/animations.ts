import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Slide in from bottom
export const slideInFromBottom: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  }
};

// Slide in from left
export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  }
};

// Slide in from right
export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale animation
export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  }
};

// Rotate and scale
export const rotateAndScale: Variants = {
  hidden: { scale: 0, rotate: -180, opacity: 0 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const hoverRotate = {
  rotate: 5,
  transition: { duration: 0.2 }
};

// Parallax scroll
export const parallaxScroll = (yOffset: number = 100): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50
    }
  }
});

// Pulse animation
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Path drawing animation for SVGs
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.2 }
    }
  }
};