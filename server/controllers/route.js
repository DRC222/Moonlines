'use strict';

const Route = require('../models/route');

exports.getAll = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200)
    res.send(routes)
  } catch (e) {
    res.status(500);
  }
};