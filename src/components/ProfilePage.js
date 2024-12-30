import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa'; 
import '../styles/profileStyles.css'; 
import profile from './assets/profile.jpeg';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  const handleUpdateClick = () => {
    navigate('/update');
  };

  return (
    <div className="profile-page" style={{ backgroundColor: 'white' }}>
      <h1 className="profile-title" >My Profile</h1>

      <div className="profile-image-container">
        <img src={profile} alt="Profile" className="profile-image" />
      </div>

      <div className="profile-details">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      <button className="update-button" onClick={handleUpdateClick}>
        Update
      </button>

      <nav className="profile-nav">
        <div className="nav-icon" onClick={() => handleNavigation('/home')}>
          <FaHome size={24} />
          <span>Home</span>
        </div>
        <div className="nav-icon" onClick={() => handleNavigation('/activities')}>
          <FaListUl size={24} />
          <span>Activities</span>
        </div>
        <div className="nav-icon" onClick={() => handleNavigation('/notifications')}>
          <FaBell size={24} />
          <span>Notifications</span>
        </div>
        <div className="nav-icon" onClick={() => handleNavigation('/profile')}>
          <FaUser size={24} />
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default ProfilePage;
