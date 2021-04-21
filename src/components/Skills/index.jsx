import { Grid, Typography } from '@material-ui/core';
import useStyles from './styes';

export default (props) => {
  const classes = useStyles();

  return(
    <div>
      <Typography variant="h4" className={classes.title}>
        {props.title}
      </Typography>
      <Typography paragraph className={classes.icon}>
        {props.icons}
      </Typography>
    </div>
  );
}