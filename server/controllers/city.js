'use strict';

const City = require('../models/city');

exports.getAll = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200)
    res.send(cities)
  } catch (e) {
    res.status(500);
  }
};