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

    this.setState({
      results: [],
      searchQuery: searchQuery
    });
    // If searchQuery isn't present, don't send request to server
    if (!searchQuery) {
      return "";
    }

    this.setState({ loading: true });

    fetch(`http://localhost:5000/api/podcasts?keywords=${searchQuery}`)
      .then(handleResponse)

      .then(result => {
        console.log(result)
        this.setState({
          loading: false,
          searchResults: result
        });
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

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map(result => (
            <div key={result.results.artistId} className="Search-result">
              {result.results.artistName}
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
    return (
      <div className="container-fluid main">
        <h1 className="page-header">Find a channel...</h1>
        <input
          id="supp-search"
          className="form-control"
          type="text"
          placeholder="Search channel"
          onChange={this.handleChange}
        />
        <Cards />
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default SearchBar;
