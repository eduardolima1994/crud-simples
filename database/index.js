const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://eduardo:eduardo@cluster0.ea2y4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useMongoClient:true });

mongoose.Promise = global.Promise;

module.exports = mongoose;


