import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
