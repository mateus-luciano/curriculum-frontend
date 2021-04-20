import { Container, Grid } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Layout({ children }) {

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container>
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
