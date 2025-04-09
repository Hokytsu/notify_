import { NotifyStyled } from "./notifyStyled";
import NotifyData from "../../interface/notifyTypes";
import Title from "./utils/title/Title";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notifyAnimations } from "./notifyAnimations";

function Notify({ data }: { data: NotifyData }) {
  const { type, message, timeout } = data;
  const [animationState, setAnimationState] = useState<string>(null!);

//---------------------------Effects--------------------------------------------------------
  useLayoutEffect(() => { // Desliza a notify para dentro da tela.
    setAnimationState("slideLeft");
  }, [])

  useEffect(() => { // Desliza a notify para forá da tela.
    const returnTimer = setTimeout(() => {
      setAnimationState("exit");
    }, timeout);
    return () => {
      clearTimeout(returnTimer);
    };
  }, []);


//-----------------------------------------------------------------------------------------
  return (
    <AnimatePresence>
      <NotifyStyled
        as={motion.div}
        type={type}
        variants={notifyAnimations}
        initial="hidden"
        animate={animationState}
        exit="exit"
      >
        <Title type={type} />
        <div id="containerMessage">
          <h1 id="message">{message}</h1>
        </div>
      </NotifyStyled>
    </AnimatePresence>
  );
}

export default memo(Notify);
