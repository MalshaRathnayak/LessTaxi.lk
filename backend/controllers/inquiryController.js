const db = require('../models/db');

// Create a new inquiry
const createInquiry = (req, res) => {
  const { from, to, passengers, vehicleType, tripType, date } = req.body;

  const sql = 'INSERT INTO inquiries (start_location, destination, passengers, vehicle_type, trip_type, date) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [from, to, passengers, vehicleType, tripType, date];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Failed to create inquiry:', err);
      return res.status(500).send('Failed to create inquiry');
    }
    res.status(201).send('Inquiry created successfully');
  });
};

// Get inquiries for a specific location
const getInquiries = (req, res) => {
  const { location } = req.params;

  const sql = 'SELECT * FROM inquiries WHERE destination = ?';
  db.query(sql, [location], (err, results) => {
    if (err) {
      console.error('Failed to fetch inquiries:', err);
      return res.status(500).send('Failed to fetch inquiries');
    }
    res.status(200).json(results);
  });
};

module.exports = { createInquiry, getInquiries };
