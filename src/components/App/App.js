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
        <div className="App-intro">
          {
            users
              ? users.map(
                (user, index) =>
                  (
                    <h1 key={index}>{user.name.first}</h1>
                  )
              )
              : <div>Loading</div>
          }
        </div>
      </div>
    );
  }

}
