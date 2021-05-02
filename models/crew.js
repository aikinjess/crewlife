const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const crewSchema = new Schema({
  name: { type: String },
  phoneNo: { type: String },
  role: { type: String },
}, {
    timestamps: true
});



module.exports = mongoose.model('Crew', crewSchema);