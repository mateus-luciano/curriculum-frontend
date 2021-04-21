import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    borderTop: '1px solid #aaaaaa',
    marginTop: '4em'
  },
}));

export default useStyles;
