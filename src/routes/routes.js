import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import FavoritesPage from "../pages/Favorites";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/favorites">
      <FavoritesPage />
    </Route>
  </Switch>
);

export default Routes;
