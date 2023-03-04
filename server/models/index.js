const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/nighttrains`, 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
);

module.exports = mongoose;