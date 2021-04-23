const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
	time: {
		type: String
	},
	date: {
		type: String,
		required: true
	},
	flightno: {
		type: Number,
        required: true, min: 1, max: 9999
	},
	arrival: {
		type: String
	},
	departur: {
		type: String
	},

	addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

module.exports = mongoose.model('Schedule', scheduleSchema);