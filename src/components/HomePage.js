import React from 'react';
import '../styles/homeStyles.css';
import { useNavigate, } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa';
import inquiries from './assets/inquiries.png';
import deals from './assets/deals.png';
import hotels from './assets/hotels.png';
import post1 from './assets/post1.webp';
import post2 from './assets/post2.jpeg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      <header className="header-box"></header>
      <p className="text-h1">Hi</p>
      <p className="name-text">Malsha  Rathnayaka</p>

      <div className="box-container">
        <div className="box box-inquiries" onClick={() => handleNavigation('/inquiries')}>
          <div className="box-content">
            <span className="box-title">Inquiries</span>
            <img src={inquiries} alt="Inquiries" className="inquiries-style" />
          </div>
        </div>

        <div className="box box-deals" onClick={() => handleNavigation('/deals')}>
          <div className="box-content">
            <span className="box-title">Deals</span>
            <img src={deals} alt="Deals" className="deals-style" />
          </div>
        </div>

        <div className="box box-hotels" onClick={() => handleNavigation('/hotels')}>
          <div className="box-content">
            <span className="box-title">Hotels</span>
            <img src={hotels} alt="Hotels" className="hotels-style" />
          </div>
        </div>
        <img src={post1} alt="Post1" className="post1-style" />
        <img src={post2} alt="Post2" className="post2-style" />
      </div>

      <nav className="bottom-nav">
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

export default HomePage;
