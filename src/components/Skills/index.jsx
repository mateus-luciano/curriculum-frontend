import { Grid, Typography } from '@material-ui/core';

export default (props) => {
  return(
    <div>
      <Typography variant="h4">
        {props.title}
      </Typography>
      <Typography paragraph>
        {props.icons}
      </Typography>
    </div>
  );
}