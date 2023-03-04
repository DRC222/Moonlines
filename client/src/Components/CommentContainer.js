import React, { useState, useEffect } from 'react';
import { getComments } from '../ApiService';

function CommentContainer({routeid}) {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((data) => setComments(data)).catch((error) => console.error(error));
  }, []);

  const routeComments = comments.filter(comment => comment.routeid === Number(routeid))

  console.log(routeComments)

  return (
    <div>{routeComments.map(rc => 
      <p key={rc.id}>{rc.comment}</p>
    )}</div>
  )
}

export default CommentContainer