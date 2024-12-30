import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa';
import '../styles/updateStyles.css';
import profile from './assets/profile.jpeg';

const UpdatePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    console.log('Updated Data:', formData);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="update-page" style={{ backgroundColor: 'white' }}>
      <h1 className="update-title">Update Profile</h1>

      <div className="profile-image-container">
        <img src={profile} alt="Profile" className="profile2-image" />
      </div>

      <form className="update-form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </label>
        <button type="button" className="save-button" onClick={handleSave}>
          Save
        </button>
      </form>

      <nav className="update-nav">
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

export default UpdatePage;
