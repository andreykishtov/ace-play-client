import React, { Component } from 'react';
import './App.css';
import AdminScreen from './components/AdminScreen';
import MainScreen from './components/Main';
import styled from 'styled-components';
import Register from './components/Login/Register';

const MAIN = 'Main';
const ADMIN_SCREEN = 'AdminScreen';
const REGISTER = 'register';
// const LOGIN = 'Login';

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: MAIN, isLogin: false };
  }

  onChangePage = (page) => {
    this.setState({currentPage: page})
  }

  renderPage() {
    switch (this.state.currentPage) {
      case MAIN:
        return <MainScreen isLogin={this.state.isLogin} />;
      case ADMIN_SCREEN:
        return <AdminScreen />;
      case REGISTER:
        return <Register />
      default:
        return;
    }
  }

  render() {
    return <Container>{this.renderPage()}</Container>;
  }
}

export default App;
