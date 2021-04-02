import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/storeClient';


ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
