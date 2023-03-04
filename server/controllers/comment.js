'use strict';

const Comment = require('../models/comment');

exports.getAll = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200);
    res.send(comments);
  } catch (e) {
    res.status(500);
  }
};

exports.post = async (req, res) => {
  const { comment, author } = req.body;
  if (!comment || !author) {
    res.status(400).send('missing parameter');
    return;
  }

  try {
    const newComment = new Comment({
      author: req.body.author,
      comment: req.body.comment,
      time: new Date().toISOString(),
      routeid: req.body.routeid,
      type: req.body.type,
    });

    await newComment.save();
    res.status(201);
    res.send(newComment);
  } catch (e) {
    res.status(500);
  }
};