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
// Initialize the User model with the specified attributes and configuration
User.init(
  {
    // Define the 'id' field
    id: {
      type: DataTypes.INTEGER, // Data type for the 'id' field (integer)
      allowNull: false, // 'id' cannot be null
      primaryKey: true, // 'id' is the primary key
      autoIncrement: true, // 'id' increments automatically
    },
    // Define the 'name' field
    name: {
      type: DataTypes.STRING, // Data type for the 'name' field (string)
      allowNull: false, // 'name' cannot be null
    },
    // Define the 'email' field
    email: {
      type: DataTypes.STRING, // Data type for the 'email' field (string)
      allowNull: false, // 'email' cannot be null
      unique: true, // 'email' values must be unique
      validate: {
        isEmail: true, // Use Sequelize validation to ensure it's a valid email
      },
    },
    // Define the 'password' field
    password: {
      type: DataTypes.STRING, // Data type for the 'password' field (string)
      allowNull: false, // 'password' cannot be null
      validate: {
        len: [8], // Use Sequelize validation to require a minimum password length of 8 characters
      },
    },
  },
  {
