const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const HospitalSchema = new mongoose.Schema({
 hospitalname:{
    type: String,
    required: true
 },
 address:{
    type: String,
    required: true
 },
 password:{
    type: String, 
    required: true
 },
 pin:{
    type: String,
    required: true
 },
 city:{
    type: String,
    requied: true
 },
 registration:{
   type: String,
   required: true
 }
});
HospitalSchema.plugin(passportLocalMongoose);
const HospitalModel = mongoose.model("hospitaldetails", HospitalSchema);
module.exports = HospitalModel;
