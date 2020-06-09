import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import FavoritesPage from "../pages/Favorites";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
