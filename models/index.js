// Import the User, Comment, and Post models
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Define associations between models

// A User can have multiple Posts (one-to-many relationship).
User.hasMany(Post, {
    foreignKey: 'user_id', // Create a foreign key 'user_id' in the Post model to associate Posts with Users
    onDelete: 'CASCADE', // When a User is deleted, also delete their associated Posts
});

// A User can have multiple Comments (one-to-many relationship).
User.hasMany(Comment, {
    foreignKey: 'user_id', // Create a foreign key 'user_id' in the Comment model to associate Comments with Users
    onDelete: 'CASCADE', // When a User is deleted, also delete their associated Comments
});

// A Comment belongs to a User (many-to-one relationship).
Comment.belongsTo(User, {
    foreignKey: 'user_id', // Create a foreign key 'user_id' in the Comment model to reference Users
});

// A Comment belongs to a Post (many-to-one relationship).
Comment.belongsTo(Post, {
    foreignKey: 'post_id', // Create a foreign key 'post_id' in the Comment model to reference Posts
});