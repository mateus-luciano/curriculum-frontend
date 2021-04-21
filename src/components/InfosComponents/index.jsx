import { 
  Typography,
} from '@material-ui/core';

export default (props) => {
  return(
    <div>
      <Typography variant="h4">
        {props.title}
      </Typography>
      <Typography variant="h6">
        {props.text}
      </Typography>
      <Typography paragraph>
        {props.span}
      </Typography>
    </div>
  );
}