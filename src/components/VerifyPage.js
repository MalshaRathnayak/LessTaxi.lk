import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import verify from './assets/verify.png';

const VerifyPage = () => {
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    navigate('/name');
  }

  return (
    <div className="verify-page">
      <h1>Verification code</h1>
      <img src={verify} alt="Verify" className="verify-image" />
      <p className="sms-info">We have sent a 4 digit code via SMS to +94767223502</p>
      <div className="code-input-container">
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
      </div>
      <button className="verify-button" onClick={handleVerifyClick}>  
        Verify
      </button>
    </div>
  );
};

export default VerifyPage;
