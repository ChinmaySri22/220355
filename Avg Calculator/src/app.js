const express = require('express');
const app = express();

// Import Routes
const numberRoute = require('./controllers/numberController');

// Use Route
app.use('/numbers', numberRoute);

module.exports = app;
