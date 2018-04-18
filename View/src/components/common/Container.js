import React from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="row">
              <SideBar />
              <SearchBar />
          </div>
      </div>
    );
  }
}

export default Container;
