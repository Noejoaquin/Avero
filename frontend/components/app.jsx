import React from "react";
import { Switch, Route } from "react-router-dom";
import TableIndexContainer from "./tables/table_index_container";
import ChecksIndexContainer from "./checks/checks_index_container";
import NavContainer from "./navigation/nav_container";
import { Footer } from "./footer/footer";

const App = () => (
  <div className="app">
    <Route path="/" component={NavContainer} />
    <Route exact path="/" component={TableIndexContainer} />
    <Route path="/tables/:tableId/checks" component={ChecksIndexContainer} />
    <Route path="/" component={Footer} />
  </div>
);

export default App;
