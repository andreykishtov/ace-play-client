import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

class AdminForm extends React.Component {
  state = {
    name: 'Cat in the Hat',
    maxPlayer: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit() {}

  render() {
    const { classes } = this.props;

    return (
      <Container>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            fullWidth
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="maxPlayer"
            fullWidth
            label="Max Players"
            value={this.state.maxPlayer}
            onChange={this.handleChange('maxPlayer')}
            margin="normal"
          />
          <TextField
            id="select-currency"
            select
            fullWidth
            label="Select"
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="select-currency-native"
            select
            fullWidth
            label="Native select"
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </form>
        <Button variant="contained" color="primary" className={classes.button}>
          Send
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </Container>
    );
  }
}

AdminForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminForm);
