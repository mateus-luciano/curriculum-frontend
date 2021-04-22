import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid black',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    width: '400px',
    margin: '1em 0'
  },
  success: {
    borderRadius: '.6em',
    marginBottom: '.6em'
  }
}));

export default useStyles;
