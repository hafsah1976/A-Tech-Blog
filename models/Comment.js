
// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize'); // Import required Sequelize classes and modules
const sequelize = require('../config/config'); // Import the Sequelize instance from a configuration file
const dayjs = require('dayjs'); // Import the dayjs library for date formatting

class Comment extends Model {}
Comment.init(
    {
        // Define the comment 'id' field
        id: {
            type: DataTypes.INTEGER, // Data type for the 'id' field (integer)
            allowNull: false, // 'id' cannot be null
            primaryKey: true, // 'id' is the primary key
            autoIncrement: true, // 'id' increments automatically
        },
