import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {

  render() {
    return (
      <div className="container search-input mt-1 p-3">
        <form onSubmit={this.props.onSubmit}>
          <div className="fromGroup">
            <label htmlFor="search">Book Search</label>
            <a href="https://books.google.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img 
                src="./images/powered_by_google_on_white.png" 
                alt="" className="float-right"
              />
            </a>
            <input 
              type="text" 
              className="form-control" 
              name="search"
              value={this.props.search}
              onChange={this.props.onChange}
              placeholder="Harry Potter"
              required>
            </input>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </form>
      </div>
    )
  }
}

export default Input;