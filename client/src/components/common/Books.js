import React, { Component } from 'react'
import Book from './Book';

//
// This is a common component for Search and Saved books
//
class Books extends Component {
  //
  // Iterate through the books for rendering
  //
  renderBooks() {
    return (
      <div className="container">
        {
          this.props.books.map((book, i) => (
            <div key={i.toString()}>
              <Book
                book={book}
                buttonName={this.props.buttonName}
                onClick={() => this.props.onClick(i)}
              />
            </div>
          ))
        }
      </div>
    );
  }

  //
  // Render searched/saved books
  //
  render() {
    return (
      <div className="container books mt-1 p-3">
        {this.renderBooks()}
      </div>
    )
  }
}

export default Books;