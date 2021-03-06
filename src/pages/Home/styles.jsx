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
  main: {
    border: '1px solid #000000',
    borderRadius: '1em',
    padding: '.5em',
  },
  textMain: {
    color: theme.palette.primary
  },
  span: {
    color: '#525252'
  }
}));

export default useStyles;
