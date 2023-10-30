const dayjs = require('dayjs'); // Import the Day.js library

module.exports = {
  // Function to format a date using Day.js
  format_date: (date) => {
    return dayjs(date).format('MM/DD/YYYY'); // Use Day.js to format the date in 'MM/DD/YYYY' format
  },
};
