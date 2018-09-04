import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { registerUser } from '../../state/actions/users'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  }
});

const Header = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;

class Register extends React.Component {
  
  onRegister = () => {
    this.props.addUser(1);
  }

  render() {
    const { classes, user } = this.props;
  return (
    <Container className={classes.container}>
      <Header>Register</Header>
      <TextField
        label="Name"
        id="margin-none"
        className={classes.textField}
        helperText="enter name here"
      />
      <TextField
        label="Email"
        id="margin-dense"
        className={classes.textField}
        helperText="enter email here"
        margin="dense"
      />
      <TextField
        label="Password"
        id="margin-normal"
        className={classes.textField}
        helperText="type your password"
        margin="normal"
      />
      <Button variant="outlined" color="primary" onClick={this.onRegister}>
        Register
      </Button>
    </Container>
  );
}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: (user) => {
      dispatch(registerUser(user));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Register))