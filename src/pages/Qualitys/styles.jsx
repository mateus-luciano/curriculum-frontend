import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  title: {
    marginBottom: '.6em'
  },
  text: {
    textIndent: '1em',
    background: '#dfdfdf',
    borderBottom: '1px solid #000000',
    borderTop: '1px solid #aaaaaa',
    borderLeft: '1px solid #aaaaaa',
    borderRight: '1px solid #aaaaaa',
    borderTopRightRadius: '.3em',
    borderTopLeftRadius: '.3em',
    margin: '.4em 0',
    padding: '.8em 0'
  }
}));

export default useStyles;
