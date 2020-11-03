const mongoose = require('mongoose');

const cakeSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: String },
  flavors: { type: [String] },
});

module.exports = mongoose.model('Cake', cakeSchema);
