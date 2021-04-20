import {
  Typography,
  Grid,
  Paper
 } from '@material-ui/core';
import useStyles from './styles';

export default (props) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid 
        container 
        xs={12}
      >
        <Grid item>
        {/* <Typography paragraph>
          {props.name}
        </Typography>
        <Typography paragraph>
          {props.comment}
        </Typography> */}
         <Paper elevation={3} className={classes.paper}>
          <Typography paragraph>
            {props.name}
          </Typography>
          <hr/>
          <Typography paragraph>
            {props.comment}
          </Typography>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}