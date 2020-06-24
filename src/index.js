import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger({
  level: "info",
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
