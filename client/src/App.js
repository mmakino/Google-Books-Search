import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import SearchInput from './components/search/Input';
import SearchResults from './components/search/Results';
import SavedBooks from './components/saved/Books';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",  // search term
      books: [],   // search result books
      errors: {}   // error messages
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      <Router>
        <div className="App">
          <Navbar />

          <header className="App-header mx-3">
            <Header />
          </header>
          
          <section className="App-search">
            <SearchInput
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </section>
          
          <section className="App-results">
            <SearchResults
              books={this.state.books}
              onClick={i => this.handleSave(i)}
            />
          </section>

          <div className="container">
            <SavedBooks />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
