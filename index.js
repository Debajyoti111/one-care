require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PatientModel = require("./models/patients");
const HospitalModel = require("./models/hospitals")
const cors = require("cors");
const bodyParser = require("body-parser")
const bcrypt = require ('bcrypt');
const saltRounds = 5;
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/patientdb", { useNewUrlParser: true });

app.get("/patient_profile", (req,res)=>{
  console.log(req.query.email);
  PatientModel.findOne($or[{email: req.query.email}, {_id:req.query._id}], (err, data)=>{
    if(!err){
      // console.log(data);
      res.send(data);
    }
    else{
      console.log(err);
    }
  })
})
app.get("/hospital_profile", (req,res)=>{
  HospitalModel.findOne({registration: req.query.id}, (err, data)=>{
    if(!err){
      // console.log(data);
      res.send(data);
    }
    else{
      console.log(err);
    }
  })
})
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

app.get("/patient_search", (req, res)=>{
  HospitalModel.findOne({registration: req.query.id}, (err, data)=>{
    console.log(data);
    if(data){
      const redirectUrl = "/patient_search?q="+req.query.id;
      res.send(redirectUrl);
    }
    else{
      res.send("/hospital_profile?q="+req.query.id);
    }
  })
})


app.listen(3001, () => {
  console.log("Server is Running! Listening at port 3001!");
});

/*Authentication*/
app.post("/register-patient", (req, res)=>{
  PatientModel.findOne({password: req.body.password}, (err, data)=>{
    if(!data)
    {
      const patient = new PatientModel({
        username: req.body.fullname,
        age: req.body.age,
        gender: req.body.gender,
        addhar: req.body.addhar,
        bloodgroup: req.body.bloodgroup,
        email: req.body.email,
        date: req.body.date,
        height: req.body.height,
        password: req.body.password,
        weight: req.body.weight,
      });
      patient.save((err)=>{
        if(err) console.log(err);
        else console.log("successfully registered");
      })
    }
    res.send("/patient_profile?q=" + req.body.email);
  })
})

app.post("/login-patient", (req, res)=>{
  PatientModel.findOne({email:req.body.email, password: req.body.password}, (err, data)=>{
    console.log(data)
    if(!data)
    {
      //No people found popup
      res.send("/");
    }
    else{
      res.send("/patient_profile?q="+ data.email);
    }
    
  })
})

app.post("/register-hospital", (req, res)=>{
  HospitalModel.findOne({password: req.body.password}, (err, data)=>{
    if(!data)
    {
      //name, registration, password, address, city, pin
      const hospital = new HospitalModel({
        hospitalname: req.body.name,
        address: req.body.address,
        pin: req.body.pin,
        city: req.body.city,
        password: req.body.password,
        registration: req.body.registration
      });
      hospital.save((err)=>{
        if(err) console.log(err);
        else console.log("successfully registered");
      })
    }
    res.send("/hospital_profile?q=" + req.body.registration);
  })
})

app.post("/login-hospital", (req, res)=>{
  HospitalModel.findOne({hospitalname:req.body.name, password: req.body.password}, (err, data)=>{
    if(!data)
    {
      //No people found popup
      res.send("/");
    }
    else{
      res.send("/hospital_profile?q=" + data.registration);
    }
    
  })
})