import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import store from "./reduxStuff/store";

const Root = () => (
  (
    <Provider store={store}>
      <BrowserRouter>
        <Route
          path="/"
          component={App}
        />
      </BrowserRouter>
    </Provider>
  )
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
