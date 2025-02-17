const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use('/api', inquiryRoutes);

// ✅ Basic API Check
app.get('/', (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
