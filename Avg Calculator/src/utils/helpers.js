function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((a, b) => a + b, 0);
    return parseFloat((sum / arr.length).toFixed(2));
  }
  
  module.exports = { calculateAverage };
  