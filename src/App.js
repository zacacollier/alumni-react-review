import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './redux/users';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {

    this.props.fetchUsers()
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

const mapStateToProps = (state) => ({
  users: state.users.users,
})
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
