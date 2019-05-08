const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({}, { strict: false });
module.exports = patient = mongoose.model('Patient', PatientSchema);
