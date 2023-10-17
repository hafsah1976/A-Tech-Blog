// Import required modules and libraries
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import Sequelize for database setup
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an instance of the Express application
const app = express();

// Define the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Configure session settings
const sess = {
  secret: 'Super secret secret',  // Secret used to sign the session ID cookie
  cookie: {
    maxAge: 300000,              // Session timeout (in milliseconds)
    httpOnly: true,              // Prevents client-side JavaScript from accessing the cookie
    secure: false,               // Set to true for HTTPS environments
    sameSite: 'strict',          // Restricts cross-site request forgery (CSRF) attacks
  },
  resave: false,                 // Don't save the session if it hasn't been modified
  saveUninitialized: true,       // Save new sessions, even if they haven't been modified
  store: new SequelizeStore({    // Store session data in the Sequelize database
    db: sequelize
  })
};

// Use the session middleware with the defined session settings
app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes for handling HTTP requests
app.use(routes);

// Sync the Sequelize database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
