const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {type: String},
  description: {type: String},
  location: {type: String},
  pay: {type: Number},
  contactEmail: {type: String},
  contactNumber: {type: Number},
},{
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);