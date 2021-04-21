import { 
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

export default (props) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography 
        variant="h4" 
        component="h4" 
        className={classes.title}
      >
        {props.title}
      </Typography>
      <Typography 
        variant="h6" 
        component="h6" 
        className={classes.text}
      >
        {props.text}
      </Typography>
      <Typography 
        paragraph 
        className={classes.span}
      >
        {props.span}
      </Typography>
    </div>
  );
}