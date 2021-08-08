import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthRoute from "./Hoc/AuthRoute";
import MainLayout from "./Hoc/MainLayout";
import PrivateRoute from "./Hoc/PrivateRoute";
import Home from "./View/Home";
import Login from "./View/Login";
import PageNotFound from "./View/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <MainLayout>
            <PrivateRoute exact path="/" component={Home} />
          </MainLayout>
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
