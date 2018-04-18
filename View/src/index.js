import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Container from "./components/common/Container";
import Panel from "./components/common/Panel";

//global imports
import "./components/vendor/bootstrap.css";
import "./components/vendor/landing-page.min.css";

const App = () => {
  return (
    //browser router imported above
    <BrowserRouter>
      <div>
        <Header />
        <Container />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
