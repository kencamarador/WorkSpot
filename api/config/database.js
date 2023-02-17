DATABASE = 'mongodb+srv://kencamarador:Apple1996@cluster0.xzc8nwl.mongodb.net/jobs?retryWrites=true&w=majority'

const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});