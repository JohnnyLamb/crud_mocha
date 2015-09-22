var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  name: String,
  location: String
});


module.exports = mongoose.model('items', Item);
