import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Avatar, Typography, Button,
} from '@material-ui/core';
import PopupWindow from './PopupWindow';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: '30px 20px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    margin: '10px 0',
  },
  avatar: {
    marginRight: '10px',
    backgroundColor: 'lightgrey',
  },
  avatarInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const SingleUser = ({ handleChange, user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PopupWindow open={open} handleClose={handleClose} handleChange={handleChange} user={user} />
      <Grid item xl={3} md={4} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatarInfo}>
            {user.username && <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>}
            <Typography variant="body1">{user.name}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              className={classes.button}
            >
              Details
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
export default SingleUser;
