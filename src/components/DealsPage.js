import React, { useState, useEffect } from 'react';
import { FaHome, FaBell, FaUser, FaListUl, FaWhatsapp, FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/dealsStyles.css'; 
import dealsData from '../DealsData.json';  

const DealsPage = () => {
  const navigate = useNavigate();
  const [deals, setDeals] = useState([]);
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  useEffect(() => {
    setDeals(dealsData);  
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDropdown = (dealId) => {
    setExpandedDropdown(expandedDropdown === dealId ? null : dealId);
  };

  return (
    <div className="deals-page">
      <h1 className="deals-title">Travel Deals</h1>

      <nav className="deals-nav">
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

      <div className="deals-list">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="deal-header">
              <div className="deal-info">
                <h3 className="deal-name">{deal.name}</h3>
                <p className="deal-offer">{deal.offer}</p>
              </div>
              <img src={deal.image} alt={deal.name} className="deal-image" />
            </div>

            {/* Save Paragraph Under Image */}
            <div className="deal-save">
              <p>{deal.description}</p>
            </div>

            <div className="deal-footer">
              <a
                href={`https://api.whatsapp.com/send?phone=94779481006&text=Book%20your%20Hurulu%20Eco%20Safari%20Jeep%20tour%20now%20by%20clicking%20the%20WhatsApp%20button%20below%E2%80%94no%20prepayment%20required.%20Trust%20in%20Less%20Taxi%E2%80%99s%20exceptional%20service%2C%20highly%20praised%20on%20TripAdvisor%2C%20to%20deliver%20a%20safari%20experience%20that%E2%80%99s%20as%20educational%20as%20it%20is%20thrilling.%0D%0A${deal.name}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="whatsapp-button">
                  <FaWhatsapp size={20} className="whatsapp-icon" />
                  <span>WhatsApp</span>
                </button>
              </a>

              {/* Dropdown Icon Moves Right Side */}
              <FaCaretDown
                size={24}
                className="dropdown-icon"
                onClick={() => toggleDropdown(deal.id)}
              />
            </div>

            {/* More Details Card with Read More functionality */}
            {expandedDropdown === deal.id && (
              <div className="dropdown-card">
                <h4>More Details:</h4>
                <p>
                  {deal.moreDetails}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
