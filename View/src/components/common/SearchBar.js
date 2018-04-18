import React from "react";
import Cards from "./Cards";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="container-fluid main">
          <h1 className="page-header">Find a channel...</h1>
          <input type="text" id="supp-search" className="form-control" placeholder="Search" />
          <Cards />
      </div>
    );
  }
}

export default SearchBar;
