import { memo, useEffect, useReducer } from "react";
import Container from "../components/container/Container";
import Notify from "../components/notify/Notify";
import "./routerStyled.css";
import { notifyReducer, createInitialState } from "./utils/notifyReducer";
import NotifyData from "../interface/notifyTypes";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { genId } from "../utils/genId";
import { AnimatePresence, motion } from "framer-motion";
import { routerAnimations } from "./routerAnimations";

function RouterApp() {
  const [notifyCache, dispatch] = useReducer(
    notifyReducer,
    createInitialState()
  );

//---------------------------Mock_WebView-----------------------------------------------------------------------
  // useEffect(() => {
  //   addNotify({
  //     type: "success",
  //     message: "Alguma mensaguem aqui só para exemplificar",
  //     timeout: 5000,
  //     id: genId(),
  //   });
  // setTimeout(() => {
  //   addNotify({
  //     type: "warning",
  //     message: "Alguma mensagem aqui para exemplificar 2",
  //     timeout: 5000,
  //     id: genId(),
  //   });
  // },1000)
  //   addNotify({ type: "error", message: "Alguma mensagem aqui para exemplificar 3", timeout: 3000, id: genId() });
  // }, []);

  //---------------------------Comunicação_com_o_Backend--------------------------------------------------------
  useNuiEvent<NotifyData>("Notify:Notify", (data) =>
    addNotify({ ...data, id: genId() })
  );
  useNuiEvent("Notify:ClearAll", () => clearAll());

  //---------------------------Controllers----------------------------------------------------------------------
  const addNotify = (notify: NotifyData) => {  // Adiciona uma nova Notify.
    dispatch({ type: "ADD", payload: notify });
    if (notify.timeout) {
      setTimeout(() => {
        removeNotify(notify.id);
      }, notify.timeout+300);
    }
  };
  const removeNotify = (id: number) => { // Remove uma Notify existente.
    dispatch({ type: "REMOVE", payload: id });
  };
  const clearAll = () => { // Remove todas as Notifys.
    dispatch({ type: "CLEAR" });
  };

  //------------------------------------------------------------------------------------------------------------
  return (
    <Container >
      <AnimatePresence>
        {notifyCache.map((notify) => (
          <motion.div
            key={notify.id}
            layout
            variants={routerAnimations}
            initial="initialPlace"
            animate="animatePlace"
            exit="exitPlace"
          >
            <Notify data={notify} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Container>
  );
}

export default RouterApp;
