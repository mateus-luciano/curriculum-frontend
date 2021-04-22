import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from '../Comment';

export default () => {
  const [comments, setComments] = useState('');
  
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

  useEffect(() => {
    getComments()
  }, [])
  
  return(
    <div>
    { comments }
    {/* { commentsList } */}
  </div>
  );
}