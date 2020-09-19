import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./styles/default.scss";
import { AirportProvider } from "models/airport";

ReactDOM.render(
  <React.StrictMode>
    <AirportProvider init={[]}>
      <App />
    </AirportProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
