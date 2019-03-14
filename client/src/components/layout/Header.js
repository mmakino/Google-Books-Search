import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-3 p-1">
        <div className="container">
          <h1 className="display-5 title">
            <span className="font-italic">React</span> Google Books Search
          </h1>
          <p className="lead">Search for and save books of interest</p>
        </div>
      </div>
    )
  }
}

export default Header;
