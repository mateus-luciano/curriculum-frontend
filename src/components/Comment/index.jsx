import {
  Typography,
  Paper
 } from '@material-ui/core';
import useStyles from './styles';

export default (props) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography paragraph>
          {props.name}
        </Typography>
        <hr/>
        <Typography paragraph>
          {props.comment}
        </Typography>
      </Paper>
    </div>
  );
}