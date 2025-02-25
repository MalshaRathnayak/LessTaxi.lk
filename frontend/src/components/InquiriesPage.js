import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa'; 
import '../styles/inquiriesStyles.css'; 

export const locations = [
  { name: 'Galle', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114747/aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg_h2gyow.jpg', path: '/inquiry/galle' },
  { name: 'Kandy', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114778/Dalada-Maligava-tooth-Buddha-Sri-Lanka-Kandy_tfjk4s.jpg', path: '/inquiry/kandy' },
  { name: 'Colombo', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114802/colombo-sri-lanka-capital-city-view_fftwka.jpg', path: '/inquiry/colombo' }, 
  { name: 'Jaffna', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114823/Jaffna-Fort-5_nr4pcn.jpg', path: '/inquiry/jaffna' },
  { name: 'Anuradhapura', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114854/Anuradhapura-Ancient-City_br4euh.jpg', path: '/inquiry/anuradhapura' },
  { name: 'Polonnaruwa', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114873/80_cym0kq.jpg', path: '/inquiry/polonnaruwa' },
  { name: 'Nuwara Eliya', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114893/houseboat-gregory-lake-nuwara-eliya-lake-gregory-is-reservoir-centre-tea-country-hill-city-nuwara-eliya-sri-lanka_78361-9717_ffrqlg.jpg', path: '/inquiry/nuwara eliya' }, 
  { name: 'Other', image: 'https://res.cloudinary.com/dhnw7pzb9/image/upload/v1740114911/sri-lanka-map-vector-abstract-atlas-poster_wefa3j.jpg', path: '/inquiry/other' }, 
];

const InquiriesPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLocationClick = (path) => {
    navigate(path);
  };

  return (
    <div className="inquiries-page">
      <h1 className="inquiries-title">Select Locations</h1>

      <div className="locations-container">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-box"
            onClick={() => handleLocationClick(location.path)}
          >
            <img
              src={location.image}
              alt={location.name}
              className="location-image"
            />
            <div className="location-name">{location.name}</div>
          </div>
        ))}
      </div>

      <nav className="inquiries-nav">
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

export default InquiriesPage;
