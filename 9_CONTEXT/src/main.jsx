import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterContextProvider } from "./components/context/CounterContext.jsx";
import { TitleColorContextProvider } from "./components/context/TitleColorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*2- criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
