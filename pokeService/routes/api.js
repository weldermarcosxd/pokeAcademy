
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var User = require('../models/user');
var Pokemon = require('../models/pokemon');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Pokemon.methods(['get', 'put', 'post', 'delete']);
Pokemon.register(router, '/pokemons');

// Return router
module.exports = router;
