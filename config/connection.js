// Import the Sequelize library to work with a MySQL database.
const Sequelize = require('sequelize');

// Import the 'dotenv' module to load environment variables from a .env file.
require('dotenv').config();

// Declare a variable to hold the Sequelize instance.
let sequelize;

// Check if the environment variable 'JAWSDB_URL' exists.
if (process.env.JAWSDB_URL) {
  // If 'JAWSDB_URL' exists, create a Sequelize instance using the provided URL.
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If 'JAWSDB_URL' is not available, create a Sequelize instance using
  // environment variables for the database configuration.
  sequelize = new Sequelize(
    process.env.DB_NAME,       // Database name
    process.env.DB_USER,       // Database user
    process.env.DB_PASSWORD,   // Database password
    {
      host: 'localhost',       // Database host (in this case, it's 'localhost')
      dialect: 'mysql',        // Specifies the type of database (MySQL in this case)
      port: 3306               // Port number for the MySQL server
    }
  );
}

// Export the Sequelize instance to be used in other parts of your application.
module.exports = sequelize;
