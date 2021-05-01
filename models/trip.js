const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  origin: { type: String, },
  airport: { type: String, },
  destination: { type: String, },
  scheduleDateTime: { type: Date }
}, {
    timestamps: true
});

const crewSchema = new Schema({
  name: { type: String },
  phoneNo: { type: String },
  role: { type: String },
}, {
    timestamps: true
});

const passengerSchema = new Schema({
  name:{ type: String },
  drink: { type:String },
  food: { type:String },
  snack: { type:String },
  seatNo: { type:String },
  }, {
    timestamps: true
});


const tripSchema = new Schema({
  startDate: { type: Date, },
  endDate:  { type: Date, },
  origin: { type: String, },
  destination: { type: String, },
  owner: {type: Schema.Types.ObjectId, ref: "User" },
  schedule: [scheduleSchema],
  crew: [crewSchema],
  passengers: [passengerSchema],
}, {
  timestamps: true
});




module.exports = mongoose.model('Trip', tripSchema);
