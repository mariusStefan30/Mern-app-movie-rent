const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');


module.exports = function () {
  const db = config.get('db', {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
}