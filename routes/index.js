const express = require('express');

const router = express.Router();

// Path Module needed to get the path that works on windows and unix OS
const path = require('path');

// Get methods from controller
const adminController = require('../controllers/admin.js');

/* When POSTing data to /add-user, addUser function is run.
To Post Data, use Postman app. Select POST and http://localhost:3000/add-user.
In Body, add a new data entry as "raw". An example entry is:
{
    "firstName": "Melvyn3",
    "lastName": "Tan3",
    "gender": "Male",
    "age": "21",
    "email": "Melvyn3@test.com"
} */
router.post('/add-user', adminController.addUser);

module.exports = router;