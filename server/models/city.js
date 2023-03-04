
'use strict';

const mongoose = require('.')

const Schema = mongoose.Schema;

const citySchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  coordinates: [Number],
  destinations: [{
    id: { type: Number},
    name: String,
    routeid: { type: Number },
    route: String
  }],
  routes: [{ type: Number }]
});

const City = mongoose.model('City', citySchema);

module.exports = City