import "./App.css";
import Home from "./Views/Home/";
import Detail from "./Views/Detail/";
import SignIn from "./Views/SignIn/";
import SignUp from "./Views/SignUp/";
import PageNotFound from "./Views/PageNotFound/";

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/singin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
