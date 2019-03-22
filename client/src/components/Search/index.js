import React, { Component } from 'react';
import axios from 'axios';

import SearchInput from './Input';
import SearchResults from '../common/Books';

//
// Search books using Google Books
//
class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",  // search term
      books: [],   // search result books
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.buttonName = "Save";  // along w/ searched books
  }

  //
  // Update input search term in the form
  //
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  //
  // Handle submit to search for books
  //
  onSubmit(e) {
    e.preventDefault();

    axios.get("/api/books/search", { params: { 
      q: this.state.search
    }}).then(results => {
      console.log(results);
      const data = results.data.items.map(item => {
        const info = item.volumeInfo;
        return {
          title: info.title,
          subtitle: ("subtitle" in info) ? info.subtitle : null,
          authors: info.authors,
          description: info.description,
          image: info.imageLinks.thumbnail,
          link: info.infoLink
        };
      });
      this.setState({ books: data });
    }).catch(err => console.log(err));
  }

  // 
  // Handle save a book event
  //
  handleSave(i) {
    axios
      .post('/api/books', this.state.books[i])
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  //
  // Render the page components
  //
  render() {
    return (
      <div className="search-books">

        <section className="App-search">
          <SearchInput
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </section>
        
        <section className="App-results">
          <SearchResults
            books={this.state.books}
            buttonName={this.buttonName}
            onClick={i => this.handleSave(i)}
          />
        </section>

      </div>
    );
  }
}

export default SearchBooks;
