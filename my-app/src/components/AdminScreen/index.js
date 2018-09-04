import React from 'react';
import styled from 'styled-components';

import AdminForm from './AdminForm';

const Header = styled.h2`
  text-align: center;
`;

class AdminScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header>Create New Game</Header>
        <AdminForm />
      </div>
    );
  }
}

AdminScreen.propTypes = {};

export default AdminScreen;
