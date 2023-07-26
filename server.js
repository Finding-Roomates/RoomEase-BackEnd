// ExpressJS
const express = require('express');
const app = express();
app.use(express.json());

// Registering Routes
const mainRoutes = require('./routes/index');
app.use(mainRoutes);

// Mongoose
const mongoose = require('mongoose');
const User = require('./models/user');

// Body Parser to read form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Visiting http://localhost:3000/users will showcase the currently stored data
app.get("/users", async (req, res) => {
  try {
    // Find all items in the database and store in users
    const users = await User.find({});
    // Display the items. Line 24 or Line 25 works
    res.status(200).json(users);
    //res.send(users);
  }
  catch (err) {
    console.log(err)
  }
});

// Connect to the mongoDB database using mongoose and serve on port 3000
mongoose.connect('mongodb+srv://mtnq9:0rYBB2RkOKf2cXFH@roomeasecluster.e3k7dme.mongodb.net/Population?retryWrites=true&w=majority')
  .then(result => {
    console.log('Connected!');

    // Create User if there are no users
    User.findOne()
      .then(user => {
        // If there are no users, then create a new user
        if (!user) {
          const user = new User({
            firstName: 'Melvyn',
            lastName: 'Tan',
            gender: 'Male',
            age: '21',
            email: 'melvyn@test.com'
          });
          // Save user to the database
          user.save();
        }
      });
      app.listen(3000);
    })
    .catch(err => {
      console.log(err);
    });

    // Update user's first name
    User.updateOne(
      { firstName: 'Sam' },
      { $set: {firstName: 'Samantha'} }
    )
    .catch(err => {
      console.log(err);
    });