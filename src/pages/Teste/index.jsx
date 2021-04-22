import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../../components/Comment';
import { 
  Grid, 
  TextField,
  Button,
  Box } from '@material-ui/core';

import { add } from '../../store/modules/comment/actions';

export default () => {
  document.title = 'Comentários - Curriculum Mateus Luciano Silva'

  const [comments, setComments] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  async function getComments() {
    const list = []
    await axios.get(`https://backend-curriculum-mateus.herokuapp.com/comments`)
    .then(response => {
      console.log(response.data.data)
      response.data.data.forEach(comment => {
        list.push(<Comment name={comment.name} comment={comment.content} />)
        setComments(list)
      })
    })
    .catch(error => console.log(error))
  }

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
        getComments()
      })
      .catch(error => console.log(error))
      setName('');
      setContent('');
      setSaved(true);
    }
  }

  useEffect(() => {
    getComments()
  }, [])
  
  return(
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <h1>Comentarios</h1>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
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