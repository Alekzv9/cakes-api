const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const cakeSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: String },
  flavors: { type: String },
});

cakeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Cake', cakeSchema);
