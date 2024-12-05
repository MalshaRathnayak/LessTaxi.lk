import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles.css';
import logo from './assets/logo.png';

const LoadPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/next');
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" onClick={handleClick} />
    </div>
  );
};

export default LoadPage;
