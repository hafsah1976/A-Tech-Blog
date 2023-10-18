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
        // Define the 'comment' text field
        comment: {
            type: DataTypes.STRING, // Data type for the 'comment' field (string)
            allowNull: false, // 'comment' cannot be null
        },
        // Define the 'user_id' field
        user_id: {
            type: DataTypes.INTEGER, // Data type for the 'user_id' field (integer)
            allowNull: false, // 'user_id' cannot be null
            references: {
                model: 'user', // References the 'user' model
                key: 'id', // Refers to the 'id' field in the 'user' model
            },
        },
        // Define the 'post_id' field
        post_id: {
            type: DataTypes.INTEGER, // Data type for the 'post_id' field (integer)
            allowNull: false, // 'post_id' cannot be null
            references: {
                model: 'post', // References the 'post' model
                key: 'id', // Refers to the 'id' field in the 'post' model
            },
        },
        // Define the 'date_posted' field
        date_posted: {
            type: DataTypes.DATE, // Data type for the 'date_posted' field (date)
            allowNull: false, // 'date_posted' cannot be null
            defaultValue: DataTypes.NOW, // Default value is the current date and time
            // Formatting the date using dayjs
            get() {
                return dayjs(this.getDataValue('date_posted')).format('MM-DD-YYYY HH:mm:ss');
            },
        },
    },
    {
        sequelize, // Pass the Sequelize instance
        freezeTableName: true, // Prevent Sequelize from pluralizing the table name
        underscored: true, // Use underscored naming for fields (e.g., created_at)
        modelName: 'comment', // Name of the model to be used in the rest of coding
    }
);

module.exports = Comment;