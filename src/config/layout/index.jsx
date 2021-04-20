import { Container, Grid } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useStyles from './styles';

export default function Layout({ children }) {
const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container className={classes.main}>
            {children}
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
