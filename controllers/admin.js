const User = require('../models/user');

// Used in routes/index.js. Adds data into the database when POSTing to /add-product.
exports.addUser = (req, res, next) => {
    // Obtain data and store it.
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;

    // Create a new user to be saved into the database.
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
      email: email
    });
    user
      .save()
      // save function returns a promise which can be handled further with then and catch.
      .then(result => {
        console.log('Created Product');
      })
      .catch(err => {
        console.log(err);
      });
  };