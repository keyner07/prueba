import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "pages/Home";
import DetailMovie from "pages/DetailMovie";
import NotFound from "pages/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/movies/:id" component={DetailMovie} />
        <Redirect from="/" to="/home" />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
