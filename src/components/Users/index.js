import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '30px 20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
  },
}));

const UserComponent = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  });

  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Grid className={classes.root}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={values.name}
              onChange={handleChange('name')}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="outlined-username"
              label="Username"
              className={classes.textField}
              value={values.username}
              onChange={handleChange('name')}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default UserComponent;
