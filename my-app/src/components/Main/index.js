import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import GamesList from '../GamesList';
import Login from '../Login/Modal';
import CreatGame from '../AdminScreen/Modal';

const Container = styled.div`
  height: 100%;
`;

const Img = styled.img`
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
`;

const Title = styled.h2`
  text-align: center;
`;

const Name = styled.div`
  margin: 0 5px;
`;

const LoggedContainer = styled.div`
  display: flex;
  align-items: center;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderLoggedIn = () => {
    return (
      <LoggedContainer>
        <Name>Hello, Admin</Name>
        <Button onClick={this.props.logout} style={{ margin: '0 5px' }} variant="contained" color="primary">
          Log Out
        </Button>
        {this.props.isAdmin && <CreatGame />}
      </LoggedContainer>
    );
  };

  render() {
    const { isLogin, checkLogin } = this.props;
    return (
      <Container>
        <Header>
          <Img src="/images/ace_logo.png" alt="Ace Labs" height="auto" width="150" />
          {isLogin ? this.renderLoggedIn() : <Login checkLogin={checkLogin} />}
        </Header>
          <Title>Ace Play</Title>
        <GamesList isLogin={isLogin} />
      </Container>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
