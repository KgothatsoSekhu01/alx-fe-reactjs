import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>  {/* Display the user's name */}
      <p>Age: {props.age}</p>  {/* Display the user's age */}
      <p>Bio: {props.bio}</p>  {/* Display the user's bio */}
    </div>
  );
};

export default UserProfile;
