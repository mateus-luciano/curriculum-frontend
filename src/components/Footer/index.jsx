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
        <Grid item>
          <Typography>
            Curriculum - Mateus Luciano da Silva
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            2021
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}