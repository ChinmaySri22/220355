const express = require('express');
const router = express.Router();
const { fetchAndProcessNumbers } = require('../services/numberService');

// Route: /numbers/:numberid
router.get('/:numberid', fetchAndProcessNumbers);

module.exports = router;
