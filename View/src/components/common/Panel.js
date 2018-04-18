import React from "react";

class Panel extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      results: [],
      error: null,
      loggedIn: false
    };
  }

  handleAuthClick() {
    window.location = "http://localhost:5000/api/authorize/instagram";
  }

  render() {
    // const { loading, error, results, loggedIn } = this.state;

    if (this.state.loggedIn == true){
      return (
        <div className="jumbotron">
            Logged In!
        </div>
      )
    }
    else {
      return (<div className="jumbotron">
          <button onClick={() => this.handleAuthClick()} className="btn btn-primary btn-lg">
            Instagram Authorization
          </button>
      </div>);
    }
  }
}

export default Panel;
