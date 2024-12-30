import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ongoingStyles.css';

const OngoingPage = () => {
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
      babySeat: 'No',
      surfBoard: 'No',
      simCard: 'No',
      adults: 2,
      kids: 1,
      vehicleType: 'Car',
      price: 'LKR:4000',
      paymentMethod: 'Credit Card',
      paymentLink: 'https://payment.example.com/1',
    }, 
    { 
      id: 2,
      name: 'Jane Smith',
      phone: '0712345678',
      date: '2024-12-13',
      time: '11:30 AM',
      pickup: '789 Oak St',
      drop: '101 Maple Ave',
      babySeat: 'No',
      surfBoard: 'No',
      simCard: 'No',
      adults: 2,
      kids: 1,
      vehicleType: 'Car',
      price: 'LKR:4000',
      paymentMethod: 'Credit Card',
      paymentLink: 'https://payment.example.com/2',
    }, 
    { 
      id: 3,
      name: 'Malsha Rathnayaka',
      phone: '0712345678',
      date: '2024-12-13',
      time: '11:30 AM',
      pickup: '789 Oak St',
      drop: '101 Maple Ave',
      babySeat: 'No',
      surfBoard: 'No',
      simCard: 'No',
      adults: 2,
      kids: 1,
      vehicleType: 'Car',
      price: 'LKR:4000',
      paymentMethod: 'Credit Card',
      paymentLink: 'https://payment.example.com/2'
    }, 
  ];

  return (
    <div className="ongoing-activities">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="activity-header">
            <div className="left">
              <p>{activity.name}</p>
              <p>{activity.phone}</p>
            </div>
            <div className="right">
              <p>{activity.date}</p>
              <p>{activity.time}</p>
            </div>
          </div>

          <hr className="activity-divider" />

          {/* First Line: Baby Seat, Surf Board, SIM Card */}
          <div className="info-line">
            <p><strong>Baby Seat:</strong> {activity.babySeat}</p>
            <p><strong>Surf Board:</strong> {activity.surfBoard}</p>
            <p><strong>SIM Card:</strong> {activity.simCard}</p>
          </div>

          <hr className="activity-divider" />

          {/* Second Line: Adults, Kids, Vehicle Type */}
          <div className="info-line">
            <p><strong>Adults:</strong> {activity.adults}</p>
            <p><strong>Kids:</strong> {activity.kids}</p>
            <p><strong>Vehicle Type:</strong> {activity.vehicleType}</p>
          </div>

          <hr className="activity-divider" />

          {/* Payment Details */}
          <div className="payment-details">
            <p><strong>Price:</strong> {activity.price}</p>
            <p><strong>Payment Method:</strong> {activity.paymentMethod}</p>
          </div>

          {/* Payment Link */}
          {activity.paymentLink && (
            <p>
              <strong>Payment Link:</strong>{' '}
              <a
                href={activity.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Complete Payment
              </a>
            </p>
          )}

          {/* Details Button */}
          <button
            className="details-button"
            onClick={() => navigate(`/activity/${activity.id}`)}
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default OngoingPage;
