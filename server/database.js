const mongoose = require('mongoose');
const keys = require('./config/keys');

var kittySchema = mongoose.Schema({
  name: String
});

Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema);

exports.initializeMongo = function() {
  mongoose.connect(keys.mongoURI);

  console.log('Trying to connect to ' + keys.mongoURI);

  var db = mongoose.connection;
  db.on(
    'error',
    console.error.bind(
      console,
      'connection error: We might not be as connected as I thought'
    )
  );
  db.once('open', function() {
    console.log('We are connected you and I!');
    addRandomCat();
  });
};

var addRandomCat = function() {
  var silence = new Kitten({
    name: 'Silence' + Math.random()
  });

  silence.save(function(err, fluffy) {
    if (err) return console.error(err);
    console.log('There is a new random cat in the neighborhood');
  });
};
