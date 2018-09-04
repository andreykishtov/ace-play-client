import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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
  ${'' /* height: 200px; */};
`;

// const Login = styled.div`
//   flex-grow: 1;
// `;

const Title = styled.h2`
  flex-grow: 6;
  text-align: center;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Tournament Portal</Title>
          <Login />
        </Header>
        <GamesList />
      </Container>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
