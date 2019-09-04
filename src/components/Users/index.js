import React, { useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SingleUser from './SingleUser';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: '30px 20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {},
  avatar: {
    marginRight: '10px',
  },
}));

const UserComponent = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState([]);

  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setValues(res.data);
    });
  }, []);
  return (
    <Grid className={classes.root} container spacing={3}>
      {values.map(user => (
        <SingleUser key={user.id} user={user} handleChange={handleChange} />
      ))}
    </Grid>
  );
};
export default UserComponent;
