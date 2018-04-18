import React from "react";
import Cards from "./Cards";
import { handleResponse } from "../../helpers";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: "",
      loading: false,
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchQuery = event.target.value;

    this.setState({ results: [], searchQuery: searchQuery });
    // If searchQuery isn't present, don't send request to server
    if (!searchQuery) {
      return "";
    }

    this.setState({ loading: true });

    fetch(`http://localhost:5000/api/podcasts?keywords=${searchQuery}`)
      .then(handleResponse)
      .then(result => {
        this.setState({ loading: false, searchResults: result });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  renderSearchResults() {
    const { searchResults, searchQuery, loading } = this.state;

    if (!searchQuery) {
      return "";
    }
    console.log(searchResults);
    if (searchResults.toString().length > 0) {
      console.log(searchResults);
      return (
        <div className="Search-result-container row">
          {searchResults.results.map(result => (
            <div key={result.trackId} className="col-md-3 col-sm-4 col-xs-12">
              <div className="supp">
                <div className="row supp-top-row">
                  <div className="col-md-12">
                    <div className="supp-image">
                      <img
                        src={result.artworkUrl60}
                        className="img-responsive"
                      />
                    </div>
                    <div className="supp-text">
                      <span className="supp-name">{result.artistName}</span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    // if (!loading) {
    //   return (
    //     <div className="Search-result-container">
    //       <div className="Search-no-result">No results found.</div>
    //     </div>
    //   );
    // }
  }

  render() {
    const { loading, searchQuery } = this.state;

    return (
      <div className="container-fluid main">
        <h1 className="page-header">Find a channel...</h1>
        <input
          className="form-control"
          type="text"
          placeholder="Search channel"
          onChange={this.handleChange}
          value={searchQuery}
        />{" "}
        {loading && <div className="Search-loading">Searching...</div>}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default SearchBar;
