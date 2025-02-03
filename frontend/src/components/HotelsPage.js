import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaListUl, FaWhatsapp, FaCaretDown } from 'react-icons/fa';
import '../styles/hotelsStyles.css';
import hotelsData from '../HotelsData.json';

const HotelsPage = () => {
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);
  const [expandedDetails, setExpandedDetails] = useState({});
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [expandedRoomDetails, setExpandedRoomDetails] = useState({});
  const [imageIndex, setImageIndex] = useState({});
  const [startTouch, setStartTouch] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);

  const locations = [
    "All Locations", "Dambulla", "Colombo", "Ella", "Galle", "Kandy", "Nuwara Eliya",
    "Yala", "Weerawila", "Hambanthota", "Tissamaharama", "Negombo", "Kandalama",
    "Ahungalla", "Katharagama", "Polonnaruwa", "Waligama", "Kaluthara", "Trincomalee",
    "Bentota", "Sigiriya", "Unawatuna", "Ambalangoda", "Beruwala", "Welimada",
    "Wellawaya", "Jaffna", "Hikkaduwa", "Passikudah", "Panadura", "Ahangama" , "Unawatuna" , "Pottuvil",
    "Habarana", "Wasgamuwa", "Wilpattu", "Kataragama"
  ];

  useEffect(() => {
    setHotels(hotelsData);
    setFilteredHotels(hotelsData); 
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleReadMore = (hotelId) => {
    setExpandedDetails((prevState) => ({
      ...prevState,
      [hotelId]: !prevState[hotelId],
    }));
  };

  const toggleDropdown = (hotelId) => {
    setExpandedDropdown(expandedDropdown === hotelId ? null : hotelId);
  };

  const toggleRoomReadMore = (hotelId, roomIndex) => {
    setExpandedRoomDetails((prevState) => ({
      ...prevState,
      [hotelId]: {
        ...prevState[hotelId],
        [roomIndex]: !prevState[hotelId]?.[roomIndex],
      },
    }));
  };

  const handleImageChange = (hotelId, roomIndex, direction) => {
    const roomImages = hotels.find(hotel => hotel.id === hotelId)?.rooms[roomIndex].image;
    const totalImages = roomImages.length;
    let newIndex = imageIndex[hotelId]?.[roomIndex] || 0;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % totalImages;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + totalImages) % totalImages;
    }

    setImageIndex((prevState) => ({
      ...prevState,
      [hotelId]: {
        ...prevState[hotelId],
        [roomIndex]: newIndex,
      },
    }));
  };

  const handleDotClick = (hotelId, roomIndex, dotIndex) => {
    setImageIndex((prevState) => ({
      ...prevState,
      [hotelId]: {
        ...prevState[hotelId],
        [roomIndex]: dotIndex,
      },
    }));
  };

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  const handleTouchEnd = (hotelId, roomIndex, e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDifference = startTouch - touchEnd;

    if (Math.abs(touchDifference) > 50) {
      if (touchDifference > 0) {
        handleImageChange(hotelId, roomIndex, 'next');
      } else {
        handleImageChange(hotelId, roomIndex, 'prev');
      }
    }
  };

  const handleSearchLocation = (location) => {
    setSearchLocation(location);
    if (location === "All Locations") {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter((hotel) => hotel.location === location);
      setFilteredHotels(filtered);
    }
  };

  return (
    <div className="hotels-page">
      <h1 className="hotels-title">Hotels</h1>

      <nav className="hotels-nav">
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

      <div className="search-container">
        <select
          className="location-dropdown"
          value={searchLocation}
          onChange={(e) => handleSearchLocation(e.target.value)}
        >
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="hotels-list">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-header">
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-rating">Rating: {hotel.rating} ⭐</p>
            </div>

            <p className="hotel-details">
              {expandedDetails[hotel.id]
                ? hotel.details
                : `${hotel.details.slice(0, 100)}...`}
              <span
                className="read-more"
                onClick={() => toggleReadMore(hotel.id)}
              >
                {expandedDetails[hotel.id] ? ' Read Less' : ' Read More'}
              </span>
            </p>

            <img src={hotel.image} alt={hotel.name} className="hotel-image" />

            <div className="hotel-footer">
              <a
                href={`https://api.whatsapp.com/send?phone=94766171257&text=Hello%20Team!%20I%20would%20like%20to%20book%20my%20stay%20in%20${hotel.name}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="whatsapp-button">
                  <FaWhatsapp size={20} className="whatsapp-icon" />
                  <span>WhatsApp</span>
                </button>
              </a>

              <FaCaretDown
                size={24}
                className="dropdown-icon"
                onClick={() => toggleDropdown(hotel.id)}
              />
            </div>

            {expandedDropdown === hotel.id && (
              <div className="dropdown-content">
                <h4>Rooms and Amenities</h4>
                {hotel.rooms?.map((room, index) => (
                  <div key={index} className="room">
                    <h5 className="room-title">{room.title}</h5>

                    <div
                      className="room-images"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={(e) => handleTouchEnd(hotel.id, index, e)}
                    >
                      <img
                        src={room.image[imageIndex[hotel.id]?.[index] || 0]}
                        alt={room.title}
                        className="room-image"
                      />
                    </div>

                    <div className="image-dots">
                      {room.image.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`dot ${dotIndex === imageIndex[hotel.id]?.[index] ? 'active' : ''}`}
                          onClick={() => handleDotClick(hotel.id, index, dotIndex)}
                        ></span>
                      ))}
                    </div>

                    <p className="room-description">
                      {expandedRoomDetails[hotel.id]?.[index]
                        ? room.description
                        : `${room.description.slice(0, 100)}...`}
                      <span
                        className="read-more"
                        onClick={() => toggleRoomReadMore(hotel.id, index)}
                      >
                        {expandedRoomDetails[hotel.id]?.[index] ? ' Read Less' : ' Read More'}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
