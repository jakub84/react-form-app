import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const TextInformation = ({ content }) => (
  <Grid container>
    <Typography style={{ width: '100%', textAlign: 'center' }} variant="body1">{content}</Typography>
  </Grid>
);
export default TextInformation;
