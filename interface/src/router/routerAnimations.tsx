import { Variants } from "framer-motion";

export const routerAnimations: Variants = {
  initialPlace: {
    opacity: 0,
    y: -20,//TODO: MUDAR PARA VH
    scale: 0.95
  },
  animatePlace: {
    opacity: 1,
    y: 0,//TODO: MUDAR PARA VH
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      mass: 0.5
    }
  },
  exitPlace: {
    opacity: 0,
    y: 20,//TODO: MUDAR PARA VH
    scale: 0.95,
    transition: { 
      duration: 0.2 
    }
  }
};

