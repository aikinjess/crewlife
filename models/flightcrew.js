const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightcrewSchema = new Schema({
	name: {
		type: String,
	},
	phoneNo: {
		type: String,
	},
	
}, { timestamps: true })

module.exports = mongoose.model('FlightCrew', flightcrewSchema);