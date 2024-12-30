import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ongoingDetailsStyles.css';

const OngoingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activities = [
    { 
      id: 1, 
      name: 'Jane Edward', 
      phone: '0712345678', 
      date: '2024-12-13', 
      time: '11:30 AM', 
      pickup: '789 Oak St', 
      drop: '101 Maple Ave',
      customerNotes: 'We look forward to serving you again soon.As a thank you for being a new customer, we are offering you a 20% discount on your next purchase. Meanwhile, if you have questions about your order, feedback, or wish to make another purchase, please do not hesitate to contact us.',
      quotationNotes: 'Special discount applied.',
      reservationNotes: 'Booked through mobile app.'
    },
    { 
      id: 2, 
      name: 'John Smith', 
      phone: '0712511606', 
      date: '2024-12-12', 
      time: '10:00 AM', 
      pickup: '123 Main St', 
      drop: '456 Park Ave',
      customerNotes: 'Needs assistance with luggage.',
      quotationNotes: 'Standard fare rate.',
      reservationNotes: 'Confirmed by phone call.'
    },
  ];

  const activity = activities.find((a) => a.id === parseInt(id));

  if (!activity) {
    return <p>Activity not found!</p>;
  }

  return (
    <div className="activity-details-container">
      <div className="activity-details-header">
        <h1>Ongoing Activity Details</h1>
      </div>

      <div className="details-scrollable">
        <div className="activity-info">
          <p><strong>Name:</strong> {activity.name}</p>
          <p><strong>Phone:</strong> {activity.phone}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Time:</strong> {activity.time}</p>
          <p><strong>Pickup Location:</strong> {activity.pickup}</p>
          <p><strong>Drop Location:</strong> {activity.drop}</p>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <div className="note">
            <p><strong>Customer Notes:</strong> {activity.customerNotes}</p>
          </div>
          <div className="note">
            <p><strong>Quotation Notes:</strong> {activity.quotationNotes}</p>
          </div>
          <div className="note">
            <p><strong>Reservation Notes:</strong> {activity.reservationNotes}</p>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default OngoingDetails;
