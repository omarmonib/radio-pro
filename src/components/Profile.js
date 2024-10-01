import React from 'react';
import './Profile.css'

const Profile = ({ name, bio }) => {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
