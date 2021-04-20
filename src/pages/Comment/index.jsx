import axios from 'axios';
import { useEffect, useState } from 'react';
import NavTabs from '../../components/NavTabs';
import { 
  Grid, 
  Typography,
  TextField,
  Button } from '@material-ui/core';
  import useStyles from './styles';

export default () => {
  const classes = useStyles();
  const [comments, setComments] = useState();
  
  async function getComments() {
    const list = []
    await axios.get(`http://localhost:3333/comments`)
    .then(response => {
      console.log(response.data.data)
      response.data.data.forEach(comment => {
        list.push(<li>{ comment.name }</li>)

        setComments(list)
      })
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getComments()
  }, [])
  
  return(
    <div>
      <NavTabs tableOne={
        <Grid container xs={12}>
          <Grid item>
            <Typography>
              { comments }
            </Typography>
          </Grid>
        </Grid>
      } tableTwo={
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
                id="comment" 
                label="Comentário" 
                multiline
                rows={4}
                variant="outlined" 
                className={classes.input} 
              />
            </form>
              <Button 
                color="primary" 
                variant="contained"
              >
                Enviar Comentário
              </Button>
          </Grid>
        </Grid>
      } 
    />
    </div>
  );
}