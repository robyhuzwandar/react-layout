import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../component/navbar";
import Page from "./Page";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
