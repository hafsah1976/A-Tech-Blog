// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize'); // Import required Sequelize classes and modules
const sequelize = require('../config/config'); // Import the Sequelize instance from a configuration file
const dayjs = require('dayjs'); // Import the dayjs library for date formatting

// Create a Post class that extends the Sequelize Model
class Post extends Model {}

// Initialize the Post model with the specified attributes and configuration
Post.init(
  {
    // Define the post 'id' field
    id: {
      type: DataTypes.INTEGER, // Data type for the 'id' field (integer)
      allowNull: false, // 'id' cannot be null
      primaryKey: true, // 'id' is the primary key
      autoIncrement: true, // 'id' increments automatically
    },
    // Define the 'postTitle' field
    postTitle: {
      type: DataTypes.STRING, // Data type for the 'postTitle' field (string)
      allowNull: false, // 'postTitle' cannot be null
    },
    // Define the 'postDescription' field
    postDescription: {
      type: DataTypes.TEXT, // Data type for the 'postDescription' field (text)
    },
    // Define the 'post_date' field
    post_date: {
      type: DataTypes.DATE, // Data type for the 'post_date' field (date)
      allowNull: false, // 'post_date' cannot be null
      defaultValue: DataTypes.NOW, // Default value is the current date and time
      // Format the date using dayjs
      get() {
        return dayjs(this.getDataValue('post_date')).format('MM-DD-YYYY HH:mm:ss');
      },
    },
    // Define the 'user_id' field
    user_id: {
      type: DataTypes.INTEGER, // Data type for the 'user_id' field (integer)
      references: {
        model: 'user', // References the 'user' model
        key: 'id', // Refers to the 'id' field in the 'user' model
      },
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true, // Use underscored naming for fields (e.g., created_at)
    modelName: 'post', // Name of the model
  }
);

// Export the Post model
module.exports = Post;