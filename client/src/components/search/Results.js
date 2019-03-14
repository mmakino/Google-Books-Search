import React, { Component } from 'react'
import Book from './Book';

class Results extends Component {
  //
  // Iterate through the search result books for rendering
  //
  renderSearchResults() {
    return (
      <div className="container">
        {
          this.props.books.map((book, i) => (
            <div key={i.toString()}>
              <Book
                book={book}
                onClick={() => this.props.onClick(i)}
              />
            </div>
          ))
        }
      </div>
    );
  }

  //
  // Render search result books
  //
  render() {
    return (
      <div className="container search-results mt-1 p-3">
        {this.renderSearchResults()}
      </div>
    )
  }
}

export default Results;