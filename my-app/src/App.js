import React, { Component } from 'react';
import './App.css';
import AdminScreen from './components/AdminScreen';

const MAIN = 'Main';
const ADMIN_SCREEN = 'AdminScreen';
const LOGIN = 'Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: ADMIN_SCREEN };
  }

  render() {
    switch (this.state.currentPage) {
      case MAIN:
        return;
      case ADMIN_SCREEN:
        return <AdminScreen />;

      default:
        return;
    }
  }
}

export default App;
