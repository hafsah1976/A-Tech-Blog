// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize'); // Import required Sequelize classes and modules
const bcrypt = require('bcrypt'); // Import the bcrypt library for password hashing
const sequelize = require('../config/connection'); // Import the Sequelize instance from a configuration file

// Create a User class that extends the Sequelize Model
class User extends Model {
  // Method to check if the entered password matches the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password); // Compare the provided password with the stored hashed password
  }
}