import React, { Component } from 'react';

export default class Users extends Component {

  render() {

    const {
      users,
    } = this.props

    return (
      <div >
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
    );
  }

}
