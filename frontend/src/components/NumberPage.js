import React, { useState } from 'react';
import '../styles/numberStyles.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import start from './assets/start.png';

const NumberPage = () => {
  const hardcodedPhoneNumber = '+';
  const [phoneNumber, setPhoneNumber] = useState(hardcodedPhoneNumber);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/verify', { state: { phoneNumber } });
  };

  return (
    <div className="number-page">
      <h1>Enter your number</h1>
      <img src={start} alt="Start" className="start-image" />
      <p className="verification-text">We will send you a verification code to this number</p>
      <div className="input-container">
        <PhoneInput
          international
          defaultCountry="International"  
          value={phoneNumber}  
          onChange={setPhoneNumber}  
          placeholder="Enter phone number"
          className="phone-input"
        />
      </div>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default NumberPage;
