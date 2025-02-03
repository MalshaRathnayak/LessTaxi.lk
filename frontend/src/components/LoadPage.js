import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loadStyles.css'; // Import the updated CSS file
import logo from './assets/logo.png'; // Make sure the path to the logo is correct

const LoadPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/next'); // Navigate to the next page on logo click
  };

  return (
    <div className="page-container">
      <img src={logo} alt="Logo" className="logo" onClick={handleClick} />
    </div>
  );
};

export default LoadPage;
