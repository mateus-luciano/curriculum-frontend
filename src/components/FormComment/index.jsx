import axios from 'axios';
import { useState } from 'react';
import { 
  TextField,
  Button,
  Box } from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  async function onSave(event) {
    event.preventDefault();

    setInvalidData(false);
    setSaved(false);

    if (!name || !content) {
      setInvalidData(true);
    } else {
      await axios({
        method: 'post',
        url: `https://backend-curriculum-mateus.herokuapp.com/comments`,
        data: {
          name: name,
          content: content
        }
      }).then(response => {
        console.log(response.data.data)
      })
      .catch(error => console.log(error))
        setName('');
        setContent('');
        setSaved(true);
    }
  }

  return(
    <div>
    {
    saved 
    ? 
      <Box 
        p={2} 
        mt={2} 
        bgcolor="green" 
        color="primary.contrastText"
        >
        Salvo com sucesso
      </Box>
    : ''
  }
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
      <br />
      <TextField 
        id="comment" 
        label="Comentário" 
        multiline
        rows={4}
        variant="outlined" 
        className={classes.input}
        value={content}
        onChange={e => setContent(e.target.value)}
        error={invalidData}
      /> 
    </form>
      <Button 
        type="submit"
        color="primary" 
        variant="contained"
        onClick={onSave}
      >
        Enviar Comentário
      </Button>
    </div>
  );
}