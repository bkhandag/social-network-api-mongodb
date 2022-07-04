const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialMediaUsersThoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
