import React from "react";
import ReactDOM from "react-dom/client";
import { Context_taskProvider } from "./context/Context_provider.jsx";
import {Create_FormValidateTaskProvider} from './context/Context_validateTask.jsx'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context_taskProvider>
      <Create_FormValidateTaskProvider>
        <App />
        </Create_FormValidateTaskProvider>
    </Context_taskProvider>
  </React.StrictMode>
);
