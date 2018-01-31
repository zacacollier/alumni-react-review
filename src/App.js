import React, { Component } from 'react';
import { get } from './helpers/api';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {

    get('https://randomuser.me/api')
      .then(res => res.json())
      .then(res => console.log(res))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
