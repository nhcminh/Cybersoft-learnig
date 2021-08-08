import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainLayout from "./HOC/MainLayout";
import PrivateRoute from "./HOC/PrivateRoute";
import AccountDetail from "./View/AccountDetail";
import FilmDetail from "./View/FilmDetail";
import Home from "./View/Home";
import PageNotFound from "./View/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:biDanh" component={FilmDetail} />
          <PrivateRoute path="/accountDetail/:name" component={AccountDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
