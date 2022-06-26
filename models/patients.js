const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const PatientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  addhar: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true,
  },
  medicalHistory: [
    {
      diagnosis: String,
      hospital: String,
      medicines: String,
      date: String,
    },
  ],
});
const PatientModel = mongoose.model("patientdetails", PatientSchema);
module.exports = PatientModel;
