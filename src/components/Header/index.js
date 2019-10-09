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
        {' '}
        <span className={classes.bold}>Lorem </span>
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, turpis vel euismod
        maximus,
        {' '}
        <span className={classes.bold}>nibh sapien cursus urna</span>
, id mattis ligula
        nibh non nibh. Duis sed velit sed lectus viverra dignissim. Mauris tincidunt tempor enim,
        eget tincidunt tellus mollis in. Donec quis mattis nulla. Nulla vitae urna sit amet lorem
        consequat auctor.
        {' '}
      </Typography>
    </Grid>
  );
};
export default Header;
