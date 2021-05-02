const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripSchema = new Schema({
  startDate: { type: Date, },
  endDate:  { type: Date, },
  origin: { type: String, },
  destination: { type: String, },
  owner: {type: Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});




module.exports = mongoose.model('Trip', tripSchema);
