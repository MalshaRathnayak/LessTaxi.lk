import React from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import start from './assets/start.png';
import flag from './assets/flag.png';

const NumberPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/verify');
    };
  return (
    <div className="number-page">
      <h1>Enter your number</h1>
      <img src={start} alt="Start" className="image-style" />
      <p className="verification-text">We will send you a verification code to this number</p>
      <div className="input-container">
        <img src={flag} alt="Flag" className="flag-style" />
        <input type="text" placeholder="Enter phone number" className="phone-input" />
      </div>
      <button className="next-btn" onClick={handleNext}>Next</button>
    </div>
  );
};

export default NumberPage;
