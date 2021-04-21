import axios from 'axios';
import { useEffect, useState } from 'react';
import NavTabs from '../../components/NavTabs';
import Comment from '../../components/Comment';
import FormComment from '../../components/FormComment';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();
  const [comments, setComments] = useState('');
  
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
            <FormComment />
          </Grid>
        </Grid>
      } 
    />
    </div>
  );
}