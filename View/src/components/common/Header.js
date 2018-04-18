import React from "react";
import "./Header.css";

class Header extends React.Component {
  handleHomeDirect() {
    window.location = "/";
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand">Feedizer</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li><a ><i className="fa fa-search"></i></a></li>
                      <li><a ><i className="fa fa-bullhorn"></i></a></li>
                      <li><a ><i className="fa fa-power-off"></i></a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Header;
