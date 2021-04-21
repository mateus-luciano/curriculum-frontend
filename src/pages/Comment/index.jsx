import axios from 'axios';
import { useEffect, useState } from 'react';
import NavTabs from '../../components/NavTabs';
import Comment from '../../components/Comment';
import FormComment from '../../components/FormComment';
import { 
  Grid, 
  TextField,
  Button,
  Box } from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();
  const [comments, setComments] = useState('');
  // const [name, setName] = useState('');
  // const [content, setContent] = useState('');
  // const [saved, setSaved] = useState(false);
  // const [invalidData, setInvalidData] = useState(false);
  // const [invalidCredentials, setinvalidCredentials] = useState(false);
  
  async function getComments() {
    const list = []
    await axios.get(`http://localhost:3333/comments`)
    .then(response => {
      console.log(response.data.data)
      response.data.data.forEach(comment => {
        list.push(<Comment name={comment.name} comment={comment.content} />)
        setComments(list)
      })
    })
    .catch(error => console.log(error))
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   setinvalidCredentials(false);

  //   await axios({
  //     method: 'post',
  //     url: `http://localhost:3333/comments`,
  //     data: {
  //         name: this.name.value,
  //         content: this.comment.value
  //     }
  //   }).then(response => {
  //     console.log(response.data.data)
  //     if (response) {

  //     } else {
  //       setinvalidCredentials(true);
  //     }
  //   })
  //   .catch(error => console.log(error))
  // }

  // async function onSave(event) {
  //   event.preventDefault();

  //   setInvalidData(false);
  //   setSaved(false);

  //   if (!name || !content) {
  //     setInvalidData(true);
  //   } else {
  //     await axios({
  //       method: 'post',
  //       url: `http://localhost:3333/comments`,
  //       data: {
  //         name: name.value,
  //         content: content.value
  //       }
  //     }).then(response => {
  //       console.log(response.data.data)
  //     })
  //     .catch(error => console.log(error))
  //       setName('');
  //       setContent('');
  //       setSaved(true);
  //   }
  // }

  // async function sendComments() {
  //   await axios({
  //     method: 'post',
  //     url: `http://localhost:3333/comments`,
  //     data: {
  //         name: this.name.value,
  //         content: this.comment.value
  //     }
  //   }).then(response => {
  //     console.log(response.data.data)
  //   })
  //   .catch(error => console.log(error))
  // }

  useEffect(() => {
    getComments()
  }, [])
  
  return(
    <div>
      <NavTabs tableOne={
        <div className={classes.row}>
          { comments }
        </div>
      } tableTwo={
        <Grid 
          container 
          xs={12}
          direction="column" 
          align="center" 
          justify="center"
        >
          <Grid item>
          {/* {
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
              </Button> */}
              <FormComment />
          </Grid>
        </Grid>
      } 
    />
    </div>
  );
}