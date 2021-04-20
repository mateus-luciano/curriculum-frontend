import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    minWidth: '400px',
    minHeight: '200px',
    padding: '.6em'
  }
}));

export default useStyles;
