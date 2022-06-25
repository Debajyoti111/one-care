const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  aadhar: {
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
    type: Date,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  medicalHistory: [
    {
      diagnosis: String,
      hospital: String,
      medicines: String,
      date: String,
      key_points: String,
    },
  ],
});
PatientSchema.plugin(passportLocalMongoose);
const PatientModel = mongoose.model("patientdetails", PatientSchema);
module.exports = PatientModel;
