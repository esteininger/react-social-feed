import React from "react";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar sidebar-skinny">
          <div>
              <img className="profile-pic" />
          </div>
          <div className="sidebar-item"><i className="fa fa-list"></i></div>
          <div className="sidebar-item selected"><i className="fa fa-star-half-o"></i></div>
          <div className="sidebar-item"><i className="fa fa-trophy"></i></div>
          <div className="sidebar-item"><i className="fa fa-bell"></i></div>
          <div className="sidebar-item"><i className="fa fa-wrench"></i></div>
      </div>
    );
  }
}

export default SideBar;
