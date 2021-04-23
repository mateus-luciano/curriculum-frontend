import { useEffect, useState } from 'react';
import NavTabs from '../../components/NavTabs';
import Comment from '../../components/Comment';
import FormComment from '../../components/FormComment';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import api from '../../services/api';

export default () => {
  document.title = 'Comentários - Curriculum Mateus Luciano Silva'

  const classes = useStyles();
  const [comments, setComments] = useState('');
  
  async function getComments() {
    const commentsApi = await api.getComments();
    const list = []
    console.log(commentsApi)

    commentsApi.forEach(comment => {
      list.push(<Comment name={comment.name} comment={comment.content} />)
    })
    setComments(list)
  }

  useEffect(() => {
    getComments()
  }, [])
  
  return(
    <div>
      <NavTabs titleOne="Comentários" tableOne={
        <div className={classes.row}>
          { comments }
        </div>
      } titleTwo="Enviar comentário" tableTwo={
        <Grid 
          container 
          xs={12}
          direction="column" 
          align="center" 
          justify="center"
        >
          <Grid item>
            <FormComment />
          </Grid>
        </Grid>
      } 
    />
    </div>
  );
}