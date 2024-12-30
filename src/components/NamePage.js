import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/nameStyles.css';

const NamePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="name-page">
      <h1 className="right-text">Your details</h1>
      <p className="line">You are one step away from creating your new</p>
      <p className="line">LassTaxi account, how should we address you?</p>

      <div className="input-container">
        <div className="input-box">
          <label htmlFor="first-name"></label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
        </div>

        <div className="input-box">
          <label htmlFor="last-name"></label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-box">
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail(Optional)"
          />
        </div>
      </div>
      <div className="button-container">
      <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NamePage;
