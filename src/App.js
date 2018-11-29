import React, { Component } from 'react';
import './App.css';
import User from './containers/User/User'
import { UserProvider } from './Context'


class App extends Component {
  render() {
    return (
      <UserProvider>
        <User />
      </UserProvider>
    );
  }
}

export default App;
