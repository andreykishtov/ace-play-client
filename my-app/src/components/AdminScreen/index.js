import React from 'react';
import styled from 'styled-components';

import AdminForm from './AdminForm';

const Container = styled.div`
  width: 850px;
  margin: 0 auto;
`;

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
      <Container>
        <Header>Admin</Header>
        <AdminForm />
      </Container>
    );
  }
}

AdminScreen.propTypes = {};

export default AdminScreen;
