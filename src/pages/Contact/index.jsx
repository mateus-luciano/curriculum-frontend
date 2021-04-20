import axios from 'axios';
import { useEffect, useState } from 'react';
import { 
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid 
        container 
        xs={12}
        direction="column" 
        align="center" 
        justify="center"
      >
        <Grid item>
          <form>
            <TextField 
              id="name" 
              label="Nome" 
              type="text" 
              variant="outlined" 
              className={classes.input} 
            />
            <br/>
            <TextField 
              id="email" 
              label="E-mail" 
              type="text" 
              variant="outlined" 
              className={classes.input} 
            />
            <br/>
            <TextField 
              id="phone" 
              label="Telefone" 
              type="number" 
              variant="outlined" 
              className={classes.input} 
            />
            <br/>
            <TextField 
              id="message" 
              label="Mensagem" 
              multiline
              rows={4}
              variant="outlined" 
              className={classes.input} 
            />
          </form>
            <Button 
              color="primary" 
              variant="contained"
            >Enviar Contato</Button>
        </Grid>
      </Grid>
    </div>
  );
}