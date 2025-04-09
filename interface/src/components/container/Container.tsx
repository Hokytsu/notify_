import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { ContainerStyled } from "./containerStyled";

interface ContainerProps {
  children: ReactNode;
  
}

function Container({ children }: ContainerProps) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}

export default memo(Container);