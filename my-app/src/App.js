import React, { Component } from 'react';
import './App.css';
// import AdminScreen from './components/AdminScreen';
import MainScreen from './components/Main';
import styled from 'styled-components';
import Register from './components/Login/Register';

const MAIN = 'Main';
// const ADMIN_SCREEN = 'AdminScreen';
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

    this.state = { currentPage: MAIN, isLogin: false, isAdmin: true };
  }

  onChangePage = page => {
    this.setState({ currentPage: page });
  };

  checkLogin = (email, password) => {
    if (email === 'admin' && password === 'admin') {
      this.setState({ isLogin: true });
      return true;
    }
    return false;
  };

  logout = () => {
    this.setState({
      isLogin: false
    });
  }

  renderPage() {
    switch (this.state.currentPage) {
      case MAIN:
        return (
          <MainScreen
            logout={this.logout}
            checkLogin={this.checkLogin}
            isLogin={this.state.isLogin}
            isAdmin={this.state.isAdmin}
          />
        );
      // case ADMIN_SCREEN:
      //   return <AdminScreen />;
      case REGISTER:
        return <Register />;
      default:
        return;
    }
  }

  render() {
    return <Container>{this.renderPage()}</Container>;
  }
}

export default App;
