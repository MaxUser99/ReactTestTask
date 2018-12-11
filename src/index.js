import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import store from "./reduxStuff/store";

// const Root = () => (
//   (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Route
//           path="/"
//           component={App}
//         />
//       </BrowserRouter>
//     </Provider>
//   )
// );

const Root = () => (
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
);

ReactDOM.render(<Root />, document.getElementById("root"));
