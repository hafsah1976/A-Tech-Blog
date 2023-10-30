// Define a middleware function called 'withAuth'
const withAuth = (req, res, next) => {
    // Check if the 'user_id' property is not present in the session
    if (!req.session.user_id) {
      // If the user is not authenticated, redirect them to the login page
      res.redirect("/login");
    } else {
      // If the user is authenticated, allow the request to proceed
      // to the next middleware or route handler in the stack
      next();
    }
  };
  
  // Export the 'withAuth' middleware for use in other parts of the application
  module.exports = withAuth;
  