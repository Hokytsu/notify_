import { useState } from "react";
import RouterApp from "./router/Router";
import { useNuiEvent } from "./hooks/useNuiEvent";

function App() {
  const [active, setActive] = useState<boolean>(true);
  useNuiEvent("Notify:ActiveNui", () => setActive(!active));
  return active && <RouterApp />;
}

export default App;
