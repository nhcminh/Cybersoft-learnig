import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Home from "../Home";
import About from "../About";
import Products from "../Products";
import DetailProduct from "../DetailProduct";
import PageNotFound from "../PageNotFound";
function Nav(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products:productID" component={DetailProduct} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Nav;
