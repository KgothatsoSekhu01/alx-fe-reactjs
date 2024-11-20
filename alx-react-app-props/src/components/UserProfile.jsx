import React, { useContext } from 'react';  // Import useContext hook
import UserContext from '../UserContext';   // Import UserContext

function UserProfile() {
  // Consume user data using useContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>          {/* Display the user's name */}
      <p>Email: {userData.email}</p>        {/* Display the user's email */}
    </div>
  );
}

export default UserProfile;
