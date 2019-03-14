
import React, { Component } from 'react';
import axios from 'axios';

import SavedBooks from '../common/Books';

//
// Saved Books
//
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],   // saved books json data
      errors: {}   // error messages
    };
    this.buttonName = 'Delete';
  }

  //
  // Retrieve all saved books
  //
  savedBooks() {
    axios
      .get('/api/books')
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  }

  // 
  // Handle delete a book event
  //
  handleDelete(i) {
    axios
      .delete('/api/books/' + this.state.books[i]._id)
      .then(res => {
        const books = this.state.books.slice();

        console.log(res.data);
        books.splice(i, 1); // Remove the book at i

        this.setState({
          books: books
        });
      })
      .catch(err => console.log(err));
  }

  //
  // Render the page components
  //
  render() {
    this.savedBooks(); // Retrieve all saved books

    return (
      <div className="saved-books">

        <section>
          <SavedBooks
            books={this.state.books}
            buttonName={this.buttonName}
            onClick={i => this.handleDelete(i)}
          />
        </section>

      </div>
    );
  }
}

export default Books;