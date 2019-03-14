import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {

  render() {
    return (
      <div className="container search-input mt-1 p-3">
        <form onSubmit={this.props.onSubmit}>
          <div className="fromGroup">
            <label htmlFor="search">Book Search</label>
            <img 
              src="./images/powered_by_google_on_white.png" 
              alt="" className="float-right"
            />
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