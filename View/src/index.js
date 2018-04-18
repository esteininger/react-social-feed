import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
  return (
  //browser router imported above
  <BrowserRouter>
    <div>
      Hi!
    </div>
  </BrowserRouter>);
};

ReactDOM.render(<App/>, document.getElementById("root"));
