import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/startStyles.css';
import start from './assets/start.png';

const StartPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/number');
  };

  const pageStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <div className="page-container" style={pageStyle}>
      <p className="text-small">Hello, nice to meet you!</p>
      <h1 className="text-large">Get a new experience.</h1>
      <img src={start} alt="Start" className="start-image" />
      <p className="taxi-text">Hire a taxi, for less – Book the best</p>
      <p className="second-text">taxis in Sri Lanka with trust and</p>
      <p className="third-text">convenions</p>

      <button className="get-start-btn" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default StartPage;
