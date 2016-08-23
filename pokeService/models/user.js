// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: String,
    aka: String,
    email: String,
    avatar: Buffer,
    bio: String,
    location: String,
    url: String,
    public_repos: Number,
    created_at: Date
});

// Return model
module.exports = restful.model('Users', userSchema);
