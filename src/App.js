import React from "react";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
