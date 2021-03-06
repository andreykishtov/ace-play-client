import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.props.onJoin();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderLoginDialog() {
    return (
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderLoggedDialog() {
    return (
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Joined Game</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  render() {
    console.log(this.props.joined);
    return (
      <div>
        {this.props.joined ? (
          <Button
            onClick={this.props.onJoin}
            variant="outlined"
            color="primary"
          >
            Exit
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Join
          </Button>
        )}
        {this.props.isLogin ? this.renderLoggedDialog() : this.renderLoginDialog()}
      </div>
    );
  }
}

export default FormDialog;
