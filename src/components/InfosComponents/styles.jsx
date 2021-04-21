import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid #aaaaaa',
    margin: '1em 0'
  },
  title: {
    color: theme.palette.primary
  },
  text: {
    color: '#000000'
  },
  span: {
    color: '#6e6e6e'
  }
}));

export default useStyles;
