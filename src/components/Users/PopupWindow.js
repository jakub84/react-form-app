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
  editableForm,
  editForm,
  showAndHidePopup,
  popupVisibility,
  handleChange,
  handleBlur,
  handleSubmit,
  deleteItem,
  values,
}) => {
  const classes = useStyles();
  return (
    <>
      <Modal
        open={popupVisibility}
        onClose={showAndHidePopup}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={classes.modalWindow}>
          <Grid item xs={12}>
            <form
              className={classes.container}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              {values.username && (
                <Avatar className={classes.avatar}>{values.name.charAt(0)}</Avatar>
              )}
              <TextField
                disabled={!editableForm}
                id="outlined-name"
                label="Name"
                name="name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                fullWidth
                multiline
                variant="outlined"
              />
              <TextField
                disabled={!editableForm}
                id="outlined-username"
                label="Username"
                name="username"
                className={classes.textField}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                fullWidth
                multiline
                variant="outlined"
              />

              <TextField
                disabled={!editableForm}
                id="outlined-address"
                label="Phone"
                name="phone"
                className={classes.textField}
                value={values.phone}
                onChange={handleChange}
                margin="normal"
                onBlur={handleBlur}
                multiline
                fullWidth
                variant="outlined"
              />
              <Grid container spacing={1} className={classes.buttonsContainer}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={showAndHidePopup}
                    className={classes.button}
                  >

                    close
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={editForm}
                    className={classes.button}
                  >

                    edit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >

                    submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={deleteItem}
                    className={classes.button}
                  >

                    delete
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
