import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Grid, 
  Typography,
  Box,
  Tab,
  Tabs,
  AppBar } from '@material-ui/core';
import NavTabs from '../../components/NavTabs';

export default () => {
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
      <Grid container xs={12}>
        <Grid item>

          <Typography>
            { comments }
          </Typography>
        </Grid>
        <NavTabs />
      </Grid>
    </div>
  );
}