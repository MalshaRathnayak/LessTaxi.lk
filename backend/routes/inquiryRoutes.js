const express = require('express');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');
const router = express.Router();

router.post('/inquiry', createInquiry);
router.get('/inquiries/:location', getInquiries);

module.exports = router;
