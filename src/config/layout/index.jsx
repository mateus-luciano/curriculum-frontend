import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from '../../components/header';

export default function Layout({ children }) {
  return (
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
        <h1>Footer</h1>
      </Grid>
    </Grid>
  );
}
