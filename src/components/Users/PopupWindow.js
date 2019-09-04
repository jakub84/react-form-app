import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, TextField, Avatar, Button, Modal,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '10px 0',
  },
  avatar: {
    marginRight: '10px',
    backgroundColor: 'lightgrey',
  },

  modalWindow: {
    backgroundColor: '#fff',
    padding: '30px',
    maxWidth: '900px',
    width: '90%',
  },
  buttonsContainer: {
    marginTop: '10px',
  },
}));

const PopupWindow = ({
  handleChange, user, open, handleClose,
}) => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const classes = useStyles();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={classes.modalWindow}>
          <Grid item xs={12}>
            <form className={classes.container} noValidate autoComplete="off">
              {user.username && <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>}
              <TextField
                disabled
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={user.name}
                onChange={handleChange('name')}
                margin="normal"
                fullWidth
                multiline
                variant="outlined"
              />
              <TextField
                disabled
                id="outlined-username"
                label="Username"
                className={classes.textField}
                value={user.username}
                onChange={handleChange('name')}
                margin="normal"
                fullWidth
                multiline
                variant="outlined"
              />

              <TextField
                disabled
                id="outlined-address"
                label="Address"
                className={classes.textField}
                value={`${user.address.street} ${user.address.suite} | ${user.address.city}`}
                onChange={handleChange('name')}
                margin="normal"
                multiline
                fullWidth
                variant="outlined"
              />
              <TextField
                disabled
                id="outlined-address"
                label="Phone"
                className={classes.textField}
                value={user.phone}
                onChange={handleChange('name')}
                margin="normal"
                multiline
                fullWidth
                variant="outlined"
              />
              <Grid container spacing={1} className={classes.buttonsContainer}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    className={classes.button}
                  >
                    close
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    className={classes.button}
                  >
                    edit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </div>
      </Modal>
    </>
  );
};
export default PopupWindow;
