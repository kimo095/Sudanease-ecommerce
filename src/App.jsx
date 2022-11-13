import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import addToCart from "./addToCart";
import Clients from "./Clients";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={Clients} />
            <Route path="/cart" exact component={addToCart} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
