'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const routeSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  routecoordinates: [[Number]],
  cityids: [{ type: Number }]
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;