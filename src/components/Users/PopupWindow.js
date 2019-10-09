import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, TextField, Avatar, Button, Modal, CircularProgress,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '10px 0',
  },
  avatar: {
    marginRight: '10px',
    backgroundColor: theme.palette.primary.main,
  },

  modalWindow: {
    backgroundColor: '#fff',
    padding: ' 10px 30px',
    maxWidth: '900px',
    width: '90%',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: 0,
    borderRadius: '0',
    minWidth: 'unset',
    width: '40px',
    height: '40px',
    color: theme.palette.primary.contrastText,
    boxShadow: 'none',
  },
  loader: {
    zIndex: 9999999,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'rgba(255,255,255,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    padding: 0,
  },
  button: {
    margin: '5px',
  },
  outerButtonsContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'no-wrap',
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
  loading,
}) => {
  const classes = useStyles();
  return (
    <>
      {loading && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
      <Modal
        open={popupVisibility}
        onClose={showAndHidePopup}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <div className={classes.modalWindow}>
          <Button
            variant="contained"
            color="primary"
            onClick={showAndHidePopup}
            className={classes.close}
          >
            <CloseIcon />
          </Button>
          <Grid item xs={12}>
            <form
              className={classes.container}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              {values.username && (
                <Avatar className={classes.avatar}>{values.name.charAt(0).toUpperCase()}</Avatar>
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
              <TextField
                disabled={!editableForm}
                id="notes"
                label="notes"
                name="notes"
                rowsMax="4"
                rows="4"
                className={classes.textField}
                value={values.notes}
                onChange={handleChange}
                margin="normal"
                onBlur={handleBlur}
                multiline
                fullWidth
                variant="outlined"
              />
              <Grid container spacing={1} className={classes.outerButtonsContainer}>
                <Grid className={classes.buttonsContainer}>
                  <Grid item>
                    <Button
                      // disabled={editableForm}
                      variant="contained"
                      color="primary"
                      onClick={editForm}
                      className={classes.button}
                    >
                      {editableForm ? 'Exit Editing' : 'Edit'}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={!editableForm}
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      className={classes.button}
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    padding: '0px',
                  }}
                >
                  <Button
                    disabled={editableForm}
                    variant="contained"
                    color="secondary"
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
