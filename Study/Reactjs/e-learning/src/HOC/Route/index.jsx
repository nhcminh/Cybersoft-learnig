import React from "react";
import { Route, Redirect } from "react-router";

const createRoute = (condition) => {
  return class extends React.Component {
    render() {
      const { path, exact, Component, redirectPath } = this.props;
      return (
        <Route
          path={path}
          exact={exact}
          render={(routeProps) => {
            if (condition()) {
              return <Component {...routeProps} />;
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};

//guard route sign in / sign up

export const AuthRoute = createRoute(() => !localStorage.getItem("t"));
export const PrivateRoute = createRoute(() => localStorage.getItem("t"));
