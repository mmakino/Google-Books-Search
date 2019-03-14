import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import SearchBooks from './components/Search';
import SavedBooks from './components/Saved';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <header className="App-header mx-3">
            <Header />
          </header>

          <section>
            <Switch>
              <Route exact path="/" component={SearchBooks} />
              <Route exact path="/saved" component={SavedBooks} />
            </Switch>
          </section>

        </div>
      </Router>
    );
  }
}

export default App;
