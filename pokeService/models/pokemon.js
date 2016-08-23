// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var pokemonSchema = new mongoose.Schema({
    attack:String,
    created:Date,
    defense:Number,
    height:Number,
    hp:Number,
    name:String,
    speed:Number,
    types:[String]
});

// Return model
module.exports = restful.model('Pokemon', pokemonSchema);
