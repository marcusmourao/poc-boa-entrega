const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);

function connectToDatabase() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
}

module.exports = connectToDatabase;
