import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { locations } from './InquiriesPage';
import '../styles/inquiryDetail.css'; 

const InquiryDetailPage = () => {
  const { locationName } = useParams(); 
  const location = locations.find(
    (loc) => loc.name.toLowerCase() === locationName?.toLowerCase()
  );

  const [formData, setFormData] = useState({
    from: '',
    to: locationName?.toLowerCase() === 'other' ? '' : location?.name || '',
    passengers: '',
    vehicleType: '',
    date: '',
  });

  
  useEffect(() => {
    if (locationName?.toLowerCase() === 'other') {
      setFormData((prevData) => ({ ...prevData, to: '' }));
    }
  }, [locationName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Inquiry successfully created!');
    
  };

  return (
    <div className="inquiry-detail-page">
      <h1>Create Inquiry for {location?.name || 'Other'}</h1>

      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Enter your starting location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Enter destination"
            readOnly={locationName?.toLowerCase() !== 'other' && !!location}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            placeholder="Enter number of passengers"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select vehicle type</option>
            <option value="Car">Car</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryDetailPage;
