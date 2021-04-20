import {
  Grid,
  Typography,
 } from '@material-ui/core';
 import useStyles from './styles';

export default () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={12} align="center">
          <Typography>
            Curriculum - Mateus Luciano da Silva
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography>
            2021
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}