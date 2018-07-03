import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import ArticleForm from "./components/ArticleList"
import AllArticles from "./components/AllArticles"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Articles</h1>
        </header>
        <p className="App-intro">

           <ArticleForm />
            <AllArticles />
        </p>
      </div>
    );
  }
}

export default App;
