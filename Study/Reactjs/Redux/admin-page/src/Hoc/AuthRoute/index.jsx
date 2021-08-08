import React from "react";
import { Redirect, Route } from "react-router-dom";

const checkToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};
function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !checkToken() ? <Component /> : <Redirect to="/" />;
      }}
    />
  );
}

export default AuthRoute;
