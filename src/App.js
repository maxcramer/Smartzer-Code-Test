import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Youtube />
        </div>
      </div>
    );
  }
}

export default App;
