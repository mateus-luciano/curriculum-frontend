import React from 'react';
import {
  Avatar,
  Typography,
  Grid,
 } from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();

  return(
  <div className={classes.root}>
      <Grid 
        container xs={12} 
        spacing={10}
        className={classes.red} 
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid 
          item xs={3} 
          spacing={10}
        >
          <Avatar 
            alt="Phone Mateus" 
            src="/static/images/avatar/1.jpg" 
            className={classes.large} 
          />
        </Grid>
        <Grid container item xs={8}>
          <Grid item>
            <Typography component="h2" variant="h2">
              Mateus Luciano da Silva
            </Typography>
          </Grid>
          <Grid item>
            <Typography paragraph>
              Estudante desenvolvimento web full stack
            </Typography>
          </Grid>
        </Grid>
    </Grid>
  </div>
  );
}
