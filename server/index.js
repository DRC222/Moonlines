'use strict';

const Express = require('express');
const cors = require('cors')
const app = new Express();
const router = require('./router.js');

app.use(cors());
app.use(Express.json());
app.use(router);


const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}🤖`);
});