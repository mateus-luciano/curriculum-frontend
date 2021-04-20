import { Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import api from '../../services/api/api';

export default () => {
  const [comments, setComments] = useState();

  async function findComments() {
    const comments = await api.getComments();
    console.log(comments)
    // const list = []

    // comments.forEach(comment => {
    //   list.push(<li>{ comment.name }</li>)
    // })

    // setComments(list);
  }

  useEffect(() => {
    findComments()
  }, [])
  
  return(
    <div>
      <Grid container xs={12}>
        <Grid item>
          <Typography>
            {/* { comments } */}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
