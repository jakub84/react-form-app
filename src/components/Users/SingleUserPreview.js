import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Avatar, Typography, Button,
} from '@material-ui/core';
import PopupValidator from './PopupValidator';

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

const SingleUserEdit = ({
  user,
  showUserDetails,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xl={3} md={4} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatarInfo}>
            {user.name && <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>}
            <Typography variant="body1">{user.name}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => showUserDetails(user.id)}
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
export default SingleUserEdit;
