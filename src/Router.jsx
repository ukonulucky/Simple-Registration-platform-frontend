import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
// import Form from "./pages/Form"
const Routercomp = () => {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          {/* <Route path="/online">
            <Form />
          </Route> */}
          <Route >
            404 page not found
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default Routercomp;
