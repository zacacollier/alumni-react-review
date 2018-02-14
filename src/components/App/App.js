import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  componentWillMount() {

    this.props.fetchUsers()

  }

  render() {

    const {
      users,
    } = this.props

    return (
      <div className="App">
        <p className="App-intro">
          {
            users[0]
              && <span>{users[0].name.first}</span>
          }
        </p>
      </div>
    );
  }

}
