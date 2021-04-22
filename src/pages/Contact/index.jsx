import axios from 'axios';
import { useState } from 'react';
import { 
  Grid,
  TextField,
  Button,
  Box,
  Typography
} from '@material-ui/core';
import useStyles from './styles';

export default () => {
  document.title = 'Contato - Curriculum Mateus Luciano Silva'
  
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  async function onSave(event) {
    event.preventDefault();

    setInvalidData(false);
    setSaved(false);

    if (!name || !email || !phone || !message) {
      setInvalidData(true);
    } else {
      await axios({
        method: 'post',
        url: `https://backend-curriculum-mateus.herokuapp.com/contact`,
        data: {
          name: name,
          email: email,
          phone: phone,
          message: message
        }
      }).then(response => {
        console.log(response.data.data)
      })
      .catch(error => console.log(error))
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSaved(true);
    }
  }

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
          {
            saved 
            ? 
              <Box 
                p={2} 
                mt={2} 
                bgcolor="green" 
                color="primary.contrastText"
                className={classes.success}
                >
                Enviado com sucesso
              </Box>
            : ''
          }
          <Grid item align="flex-start">
            <Typography variant="h4">
              Contato
            </Typography>
          </Grid>
          <form>
            <TextField 
              id="name" 
              label="Nome" 
              type="text" 
              variant="outlined" 
              className={classes.input} 
              value={name}
              onChange={e => setName(e.target.value)}
              error={invalidData}
            />
            <br/>
            <TextField 
              id="email" 
              label="E-mail" 
              type="text" 
              variant="outlined" 
              className={classes.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={invalidData}
            />
            <br/>
            <TextField 
              id="phone" 
              label="Telefone" 
              type="text" 
              variant="outlined" 
              className={classes.input}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              error={invalidData}
            />
            <br/>
            <TextField 
              id="message" 
              label="Mensagem" 
              multiline
              rows={4}
              variant="outlined" 
              className={classes.input}
              value={message}
              onChange={e => setMessage(e.target.value)}
              error={invalidData}
            />
          </form>
            <Button 
              color="primary" 
              variant="contained"
              onClick={onSave}
            >
              Enviar Contato
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}
