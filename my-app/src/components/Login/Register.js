import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const TextFieldMargins = props => {
  const { classes } = props;

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
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Register
      </Button>
    </Container>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFieldMargins);
