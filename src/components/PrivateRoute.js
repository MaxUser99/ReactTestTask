import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';

import Login from "./Login";

const privateRoute = ({ Component, ...rest }) => {
  const { isLogined } = rest;
  console.log(rest);
  return (
    <Route
      {...rest}
      render={() => (
        isLogined
          ? <Component {...rest} />
          : <Redirect to="/login" />
      )}
    />
  );
};

const mapStoP = (state, ownProps) => ({
  isLogined: state.isAuthentificated,
  Component: ownProps.myComponent
});

const PrivateRoute = connect(mapStoP, null)(privateRoute);
export default PrivateRoute;
