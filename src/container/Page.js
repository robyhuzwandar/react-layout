import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import News from "./News";
import { Route, Switch } from "react-router-dom";

export default class Page extends Component {
  render() {
    return <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </Switch>
      </main>;
  }
}
