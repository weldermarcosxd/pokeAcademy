/**
 * Module dependencies
 */
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var request = require('request');
// request({
//     url: 'http://www.cedynamix.fr/wp-content/uploads/Tux/Tux-G2.png',
//     encoding: 'binary'
// }, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//         body = new Buffer(body, 'binary');
//
//         // Here "body" can be affected to the "a.img.data"
//         // var a = new A;
//         // a.img.data = body;
//         // ....
//     }
// });

// img path
var pokemonsAdds = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var mongodbUri = 'mongodb://weldermarcosxd:shuriken2011@ds027215.mlab.com:27215/omega';

// connect to mongo
mongoose.connect(mongodbUri);

// example schema
var schema = new Schema({
    name: String,
    attack: Number,
    defense: Number,
    height: Number,
    hp: Number,
    speed: Number,
    types: [String],
    img: {
        data: Buffer,
        contentType: String
    }
});

// our model
var Pokemon = mongoose.model('Pokemon', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
  Pokemon.remove(function (err) {
    if (err) throw err;

    console.error('removed old docs');

    // store an img in binary in mongo

    console.log('feeding database...');

    pokemonsAdds.forEach(poke => {
      var pokemon = new Pokemon;

      pokemon.name = poke.name;
      pokemon.attack = poke.attack;
      pokemon.defense = poke.defense;
      pokemon.hp = poke.hp;
      pokemon.speed = poke.speed;
      pokemon.created_at = new Date();
      pokemon.types = poke.types;
      //pokemon.img.data: poke.
      //pokemon.contentType: poke.

      pokemon.save(function (err, pokemon) {
        if (err) throw err;
      });
    });

    console.log('database complete');

    // start a demo server
    var server = express();
    server.get('/', function (req, res, next) {
      Pokemon.findById(pokemon, function (err, doc) {
        if (err) return next(err);
        res.contentType(doc.img.contentType);
        res.send(doc.img.data);
      });
    });

    server.on('close', function () {
      console.error('dropping db');
      mongoose.connection.db.dropDatabase(function () {
        console.error('closing db connection');
        mongoose.connection.close();
      });
    });

    server.listen(3000, function (err) {
      console.error('server listening on localhost:3333');
      console.error('press CTRL+C to exit');
    });

    process.on('SIGINT', function () {
      server.close();
    });

  });
});
