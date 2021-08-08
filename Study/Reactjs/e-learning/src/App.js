import Home from "./Views/Home";
import Detail from "./Views/Detail";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";
import PageNotFound from "./Views/pageNotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
import React from "react";
import { connect } from "react-redux";
import { getMe } from "./store/actions/auth";
import { AuthRoute, PrivateRoute } from "./HOC/Route";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <PrivateRoute path="/" exact Component={Home} redirectPath="/signin" />
            <PrivateRoute
              path="/detail/:id"
              Component={Detail}
              redirectPath="/signin"
            />
            <AuthRoute path="/signup" Component={Signup} redirectPath="/" />
            <AuthRoute path="/signin" Component={Signin} redirectPath="/" />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMe);
  }
}

export default connect()(App);
