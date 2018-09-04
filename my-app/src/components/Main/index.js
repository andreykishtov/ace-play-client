import React from 'react';
import styled from 'styled-components';

import GamesList from '../GamesList';
import Login from '../Login/Modal';
const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
`;

const Title = styled.h2`
  flex-grow: 7;
  text-align: center;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isLogin } = this.props;
    return (
      <Container>
        <Header>
          <img src="/images/ace_logo.png" alt="Ace Labs" height="auto" width="150" />
          <Title>Tournament Portal</Title>
          {isLogin ? <div /> : <Login />}
        </Header>
        <GamesList isLogin={isLogin} />
      </Container>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
