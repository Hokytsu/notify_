 import { Variants } from "framer-motion";

 export  const notifyAnimations: Variants = {
  hidden: {
    x: "0vw",
    opacity: 1,
  },
  slideLeft: {
    x: "-12vw", 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  },
  exit: {
    x: "0vw", 
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};