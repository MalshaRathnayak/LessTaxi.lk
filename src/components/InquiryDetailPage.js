import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import '../styles/inquiryDetail.css';

const locationOptions = [
  'Abepussa', 'Adams Peak', 'Ahangama', 'Ahungalla', 'Akurala', 'Ambalangoda', 
  'Ambuluwawa', 'Ampara', 'Anuradhapura', 'Arugambay', 'Avissawella', 'BIA', 
  'Badulla', 'Bandarawela', 'Baticalo', 'Bentota', 'Beruwala', 'Chilaw', 'Colombo', 
  'Companna Veediya', 'Dambulla', 'Dikwella', 'Ella', 'Embilipitiya', 'Galgamuwa', 
  'Galle', 'Gampaha', 'Gampola', 'Gotagogama', 'Goyambokka', 'Habarana', 'Hambantota', 
  'Haputale', 'Hatton', 'Hikkaduwa', 'Hiriketiya', 'Horana', 'Hortain plane', 'Induruwa', 
  'Jaffna', 'Kalkudah', 'Kalpitiya', 'Kalutara', 'Kandalama', 'Kandy', 'Kantal', 'Kantale',  
  'Kirinda', 'Kithulgala', 'Koggala', 'Kolonnawa', 'Kosgoda', 'Kottawa', 'Kuliyapitiya', 'Mannar', 
  'Matale', 'Matara', 'Mattala', 'Minuwangoda', 'Mirissa', 'Monaragala', 'Moratuwa', 'Mulattivu', 
  'MRIA', 'Nanu Oya', 'Negombo', 'Nilaveli', 'Nuwara Eliya', 'Padiyatalawa', 'Panadura', 'Pasikudah', 
  'Pettah', 'Polonnaruwa', 'Pottuvil', 'Puttalam', 'Rakwana', 'Ramboda', 'Ranna', 'Ratnapura', 'Sigiriya', 
  'Sinharaja', 'Talalla', 'Tangalle', 'Telulla', 'Thalpe', 'Thissamaharama', 'Trincomalee', 'Udawalawa', 
  'Unakuruwa', 'Unawatuna', 'Vavuniya', 'Wadduwa', 'Waikkal', 'Wanathamulla', 'Waskaduwa', 'Weerawila', 
  'Weligama', 'Welikanda', 'Wellawaya', 'Wilpattu', 'Yala (Kirinda)', 'Other'
];

const InquiryDetailPage = () => {
    const { locationName } = useParams(); 
    const isOtherLocation = locationName?.toLowerCase() === 'other';
    
    // Capitalize only the first letter of the location
    const capitalizedLocation = locationName 
      ? locationName.charAt(0).toUpperCase() + locationName.slice(1).toLowerCase() 
      : '';
  
    const [formData, setFormData] = useState({
      from: '',
      to: isOtherLocation ? '' : capitalizedLocation, 
      passengers: '',
      vehicleType: '',
      date: '',
    });
  
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
        <h1>Create Inquiry for {isOtherLocation ? 'Other' : capitalizedLocation}</h1>
  
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
            {isOtherLocation ? (
              <select
                id="to"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select destination</option>
                {locationOptions.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                readOnly
                placeholder="Destination autofilled"
              />
            )}
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