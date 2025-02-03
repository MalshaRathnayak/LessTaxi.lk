import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/inquiryDetail.css';
import axios from 'axios';
import tripTypeData from '../TripTypeData.json';

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

  const capitalizedLocation = locationName
    ? locationName.charAt(0).toUpperCase() + locationName.slice(1).toLowerCase()
    : '';

  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    from: '',
    to: isOtherLocation ? '' : capitalizedLocation,
    passengers: '',
    vehicleType: '',
    date: '',
    tripType: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "tripType") {
      // Find the name of the trip type based on the selected ID
      const selectedTripType = tripTypeData.data.find(type => type.id === parseInt(value))?.name;

      // Save the name of the trip type in the formData
      setFormData(prevData => ({ ...prevData, tripType: selectedTripType }));
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.from.trim()) {
      errors.from = 'Starting location is required.';
      formIsValid = false;
    }

    if (isOtherLocation && !formData.to.trim()) {
      errors.to = 'Destination is required.';
      formIsValid = false;
    }

    if (!formData.passengers || formData.passengers <= 0) {
      errors.passengers = 'Please enter a valid number of passengers.';
      formIsValid = false;
    }

    if (!formData.vehicleType) {
      errors.vehicleType = 'Please select a vehicle type.';
      formIsValid = false;
    }

    if (!formData.tripType) {
      errors.tripType = 'Please select a trip type.';
      formIsValid = false;
    }

    if (!formData.date) {
      errors.date = 'Date is required.';
      formIsValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      if (selectedDate < new Date(today)) {
        errors.date = 'Date cannot be in the past.';
        formIsValid = false;
      }
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/inquiry', formData);
      alert('Inquiry created successfully: ' + response.data.message); // Assuming the response contains a message
    } catch (error) {
      console.error('Error creating inquiry:', error);
      alert('Failed to create inquiry.');
    }
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
          {formErrors.from && <span className="error-text">{formErrors.from}</span>}
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
          {formErrors.to && <span className="error-text">{formErrors.to}</span>}
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
          {formErrors.passengers && <span className="error-text">{formErrors.passengers}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            placeholder="Select Vehicle type"
            required
          >
            <option value="" disabled>Select vehicle type</option>
            <option value="Medium Size Car">Medium Size Car</option>
            <option value="Large Size Car (Sedan)">Large Size Car (Sedan)</option>
            <option value="SUV">SUV</option>
            <option value="Van Flat Roof">Van Flat Roof</option>
            <option value="Van High Roof">Van High Roof</option>
            <option value="Safari Jeep">Safari Jeep</option>
            <option value="Boat">Boat</option>
            <option value="Mini Bus">Mini Bus</option>
            <option value="Bus">Bus</option>
          </select>
          {formErrors.vehicleType && <span className="error-text">{formErrors.vehicleType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="tripType">Trip Type:</label>
          <select
            id="tripType"
            name="tripType"
            value={formData.tripType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select trip type</option>
            {tripTypeData?.data?.length > 0 ? (
              tripTypeData.data.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))
            ) : (
              <option disabled>No trip types available</option>
            )}
          </select>
          {formErrors.tripType && <span className="error-text">{formErrors.tripType}</span>}
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
            min={today}
          />
          {formErrors.date && <span className="error-text">{formErrors.date}</span>}
        </div>

        <button type="submit" className="submit-btn">Create Inquiry</button>
      </form>
    </div>
  );
};

export default InquiryDetailPage;
