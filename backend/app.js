const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', inquiryRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
