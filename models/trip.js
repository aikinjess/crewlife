const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripSchema = new Schema({
  departure: { type: Date, },
  arrival:  { type: Date, },
  origin: { type: String, },
  destination: { type: String, },
  flightAttendant1: { type: String, },
  pilot: { type: String, },
  firstOfficer: { type: String, },
  flightAttendant2: { type: String, },
  startDate: { type: String, },
  
  owner: {type: Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true
});




module.exports = mongoose.model('Trip', tripSchema);
