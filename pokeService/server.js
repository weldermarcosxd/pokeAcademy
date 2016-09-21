
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//mongo lab internal variable
var mongoUrl = process.env.OMEGA;

// MongoDB
mongoose.connect(mongoUrl, function (error) {
    if (error) console.error(mongoUrl);
    else console.log('Connected into the pokemon Database');
});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
