import React, { Component } from 'react';
import Users from '../Users';
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
        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }

}
