import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Movie></Movie>
      </div>
    );
  }
}

export default App;
