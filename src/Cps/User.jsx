import React from 'react';
import { useParams } from 'react-router-dom';
 
function User() {
  const { username } = useParams();
  return <h1>Welcome {username} to home page </h1>;
}
 
export default User;