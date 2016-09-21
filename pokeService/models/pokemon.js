// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var pokemonSchema = new mongoose.Schema({
    name: String,
    attack: Number,
    defense: Number,
    height: Number,
    hp: Number,
    speed: Number,
    created_at: String,
    types: [String],
    img: {
        data: Buffer,
        contentType: String
    }
});

// Return model
module.exports = restful.model('Pokemon', pokemonSchema);
