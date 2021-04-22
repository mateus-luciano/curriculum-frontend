import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  TextField,
  Button,
  Box } from '@material-ui/core';
import useStyles from './styles';
import { add } from '../../store/modules/comment/actions';

export default () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const dispatch = useDispatch();

  async function onSave(event) {
    event.preventDefault();

    setInvalidData(false);
    setSaved(false);

    if (!name || !content) {
      setInvalidData(true);
    } else {
      dispatch(add({
        name,
        content,
      }));

      setName('');
      setContent('');
      setSaved(true);

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
        className={classes.success}
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