const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
	name: {
		type: String,
	},
	drink: {
		type: String,
	},
    food: {
        type: String,
    },
    snack: {
        type: String,
    }
	
}, { timestamps: true })

module.exports = mongoose.model('Passenger', passengerSchema);