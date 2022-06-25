const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PatientModel = require("./models/patients");
const passport = require("./authentication");
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://locallhost:27017/patientdb",{useNewUrlParser:true});

app.get("/getPatients", (req, res) => {
  PatientModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createPatient", async (req, res) => {
  const Patient = req.body;
  const newPatient = new PatientModel(Patient);
  await newPatient.save();

  res.json(Patient);
});

app.listen(3001, () => {
  console.log("Server is Running! Listening at port 3001!");
});

// app.post("/register", (req, res)=>{
//   DbModel.register({username: req.body.email}, req.body.password, (err, user)=>{
//   if (!err){
//   passport.authenticate("local")(req,res, function(){
//     console.log(user);
//     //redirect to patient portfolio or hostpital search depending on which type 
//    }
//   )}})})

//   app.get("/patient-portfolio", (req, res)=>{
//     if(req.isAuthenticated())
//     {
//       //Redirect to patient portfolio
//     }
//     else{
//       //Redirect to landing page
//     }
//   })
