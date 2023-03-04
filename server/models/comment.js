'use strict';

const mongoose = require('.')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  routeid: { type: Number },
  type: { type: String, required: true },
  author: { type: String, required: true },
  time: { type: Date, default: Date.now },
  comment: { type: String, required: true }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment