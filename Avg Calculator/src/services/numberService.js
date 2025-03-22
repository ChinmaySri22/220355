const axios = require('axios');
const { calculateAverage } = require('../utils/helpers');

// Window state
let windowState = [];
let windowPrevState = [];
const windowSize = 10;

// Mapping of IDs to URLs
const URLS = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibo',
  e: 'http://20.244.56.144/test/even',
  r: 'http://20.244.56.144/test/rand'
};

async function fetchAndProcessNumbers(req, res) {
  const { numberid } = req.params;

  // Validate numberid
  if (!URLS[numberid]) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  try {
    // Fetch numbers with 500ms timeout
    const response = await axios.get(URLS[numberid], { timeout: 500 });

    const receivedNumbers = response.data.numbers;
    const uniqueNewNumbers = receivedNumbers.filter(num => !windowState.includes(num));

    // Store previous state
    windowPrevState = [...windowState];

    // Add unique numbers while keeping window size
    uniqueNewNumbers.forEach(num => {
      if (windowState.length >= windowSize) {
        windowState.shift(); // remove oldest
      }
      windowState.push(num);
    });

    const avg = calculateAverage(windowState);

    // Prepare response
    res.json({
      windowPrevState,
      windowCurrState: [...windowState],
      numbers: receivedNumbers,
      avg
    });
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    // In case of timeout or other errors
    res.status(500).json({ error: 'Failed to fetch numbers within 500ms or server error' });
  }
}

module.exports = { fetchAndProcessNumbers };
