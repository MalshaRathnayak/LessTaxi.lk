import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa';
import OngoingPage from './OngoingPage';
import CompletedPage from './CompletedPage';
import CancelledPage from './CancelledPage';
import '../styles/activitiesStyles.css';

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ongoing');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {           
      case 'ongoing':
        return <OngoingPage />;
      case 'completed':
        return <CompletedPage />;
      case 'cancelled':
        return <CancelledPage />;
      default:
        return <OngoingPage />;
    }
  };

  return (
    <div className="activities-page">
      <h1 className="activities-title">Your Activities</h1>

      <div className="activities-tabs">
        <button
          className={`tab-button ${activeTab === 'ongoing' ? 'active' : ''}`}
          onClick={() => setActiveTab('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button
          className={`tab-button ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <div className="activities-content">{renderActiveTabContent()}</div>

      <nav className="activities-nav">
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

export default ActivitiesPage;
