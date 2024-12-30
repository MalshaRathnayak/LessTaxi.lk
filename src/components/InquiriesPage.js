import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl } from 'react-icons/fa'; 
import '../styles/inquiriesStyles.css'; 

export const locations = [
  { name: 'Galle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1jX6S0MTB1CaGBXzWa_alpuiz-EJN9eRNQ&s', path: '/inquiry/galle' },
  { name: 'Kandy', image: 'https://cdn.britannica.com/19/118219-050-8BA0B67E/Dalada-Maligava-tooth-Buddha-Sri-Lanka-Kandy.jpg', path: '/inquiry/kandy' },
  { name: 'Colombo', image: 'https://media.istockphoto.com/id/1051597002/photo/colombo-sri-lanka-capital-city-view.jpg?s=612x612&w=0&k=20&c=_HCqhyAWbWdeDyeWV6D2xlL9dNgyQZIW5I_hD4YPNgE=', path: '/inquiry/colombo' }, 
  { name: 'Jaffna', image: 'https://travellersisle.com/wp-content/uploads/2023/02/Jaffna-Fort-5.jpg', path: '/inquiry/jaffna' },
  { name: 'Anuradhapura', image: 'https://thevisitlankatours.com/wp-content/uploads/2024/03/Anuradhapura-Ancient-City.jpg', path: '/inquiry/anuradhapura' },
  { name: 'Polonnaruwa', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d6/3c/80.jpg', path: '/inquiry/polonnaruwa' },
  { name: 'Nuwara Eliya', image: 'https://img.freepik.com/premium-photo/houseboat-gregory-lake-nuwara-eliya-lake-gregory-is-reservoir-centre-tea-country-hill-city-nuwara-eliya-sri-lanka_78361-9717.jpg', path: '/inquiry/nuwara eliya' }, 
  { name: 'Other', image: 'https://media.istockphoto.com/id/1211536621/vector/sri-lanka-map-vector-abstract-atlas-poster.jpg?s=612x612&w=0&k=20&c=de7Gv5t-3GYk6gBN8_zrlKP2DjjH6NJPhlSQk2yJ2v8=', path: '/inquiry/other' }, 
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
