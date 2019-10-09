import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    maxWidth: 200,
    marginBottom: 60,
  },
  headerText: {
    color: 'Grey',
    fontSize: 14,
    borderTop: '1px dotted lightGrey',
    borderBottom: '1px dotted lightGrey',
    display: 'inline-block',
    width: '100%',
    lineHeight: 1.6,
    padding: '20px 0',
    marginBottom: 40,
  },
  bold: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.headerContainer}>
      <img className={classes.image} src={Logo} alt="Users from api" />
      <Typography className={classes.headerText}>
        This App uses
        {' '}
        <span className={classes.bold}>React.js</span>, 
        <span className={classes.bold}> Material UI</span>
        {' '}
library and fake api from
        {' '}
        <span className={classes.bold}> jsonplaceholder.typicode.com </span>
        which means all requests only simulates real behavior.
      </Typography>
    </Grid>
  );
};
export default Header;
