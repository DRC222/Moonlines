'use strict';

const { Router } = require('express');
const router = new Router();

const city = require('./controllers/city.js');
const route = require('./controllers/route.js');
const comment = require('./controllers/comment.js');

router.get('/cities', city.getAll);

router.get('/routes', route.getAll);

router.get('/comments', comment.getAll);

router.post('/comments', comment.post);



module.exports = router;