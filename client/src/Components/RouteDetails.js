import React from 'react'
import { Routes, useParams } from "react-router-dom"
// import { comments } from '../Comments'
import CommentContainer from './CommentContainer'


function RouteDetails({ routes }) {
  const { id } = useParams()

  const route = routes.find(route => route.id === Number(id));

  // const routeComments = comments.filter(comment => comment.routeid === Number(id))

  // const ticketComments = routeComments.filter(comment => comment.type === 'tickets');
  // const facilityComments = routeComments.filter(comment => comment.type === 'facilities');
  // const journeyComments = routeComments.filter(comment => comment.type === 'journey');
 
   
  return (
    <div>
       <div>RouteDetails for {id} </div>
       
       <p>{route.name}</p>
     
       <CommentContainer routeid={id}/>
    
    </div>
  );
} 

export default RouteDetails  