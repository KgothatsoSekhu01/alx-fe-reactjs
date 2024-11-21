import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();  // Dynamic param from the URL
  return <h1>User Profile for {userId}</h1>;
};

export default UserProfile;
