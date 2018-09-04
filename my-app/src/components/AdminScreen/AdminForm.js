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

const mode = [
  {
    value: 'flag',
    label: 'capture flag'
  },
  {
    value: 'brawl',
    label: 'heroes brawl'
  }
];

const map = [
  {
    value: 'Berlin',
    label: 'Berlin'
  },
  {
    value: 'Tel Aviv',
    label: 'Tel Aviv'
  }
];

class AdminForm extends React.Component {
  state = {
    name: '',
    maxPlayer: '',
    mode: '',
    map: '',
    start: '',
    end: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  createGame = () => {

  }

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
            label="Mode"
            value={this.state.mode}
            onChange={this.handleChange('mode')}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select mode"
            margin="normal"
          >
            {mode.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField
            id="select-currency"
            select
            fullWidth
            label="Select"
            value={this.state.map}
            onChange={this.handleChange('map')}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select map"
            margin="normal"
          >
            {map.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
        id="datetime-start"
        label="Game Start"
        type="datetime-local"
        value={this.state.start}
        fullWidth
        style ={{width: '100%', margin:'10px 0'}}
        InputLabelProps={{
          shrink: true,
        }}
      />
         <TextField
        id="datetime-end"
        label="Game End"
        type="datetime-local"
        value={this.state.end}        
        style ={{width: '100%', margin:'10px 0'}}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </form>
        <Button onClick={this.createGame} variant="contained" color="primary" className={classes.button}>
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
