import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  red: {
    background: 'red'
  },
  blue: {
    background: 'blue'
  },
  green: {
    background: 'green'
  }
}));

export default useStyles;
