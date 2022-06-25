require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PatientModel = require("./models/patients");
const HospitalModel = require("./models/hospitals")
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
})
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/patientdb", { useNewUrlParser: true });

passport.use(PatientModel.createStrategy()); //Creates the Session
passport.serializeUser(PatientModel.serializeUser()); //Creates the cookie
passport.deserializeUser(PatientModel.deserializeUser());


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

app.get("/patient-portfolio/:username", (req, res) => {
  if (req.isAuthenticated()) {
    //render the patient portfolio for the particular patient using his username
  }
  else {
    res.redirect("/register/patient");
  }
})

app.get("/search-patient/:hospitalname", (req, res)=>{
  if(req.isAuthenticated())
  {
    //render the search page of hospital with it's data
  }
  else{
    res.redirect("/login/hospital");
  }
})
/*Authentication For Patients*/
app.post("/register/patient", (req, res) => {
  const patientObject = new PatientModel({
    username: req.body.fullname,
    age: req.body.age,
    gender: req.body.gender,
    addhar: req.body.addhar,
    bloodgroup: req.body.bloodgroup,
    email: req.body.email,
    date: req.body.date,
    height: req.body.height,
    weight: req.body.weight
  });
  PatientModel.register(patientObject, req.body.password, (err, user) => {
    if (!err) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/patient-portfolio/"+req.body.username);
      })
    }
    else{
      res.redirect("/");
    }
  })
})
app.post("/login/patient", (req, res) => {
  const patient = new PatientModel({
    email: req.body.email,
    password: req.body.password
  });
  req.login(patient, (err) => {
    if (!err) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/patient-portfolio");
      })
    }
    else{
      res.redirect("/login/patient");
    }
  })
})
/*Authentication for Hospitals*/
app.post("/register/hospital", (req, res) => {
  const hospitalObject = new HospitalModel({
    hospitalname: req.body.hospitalname,
    address: req.body.address,
    pin: req.body.pin,
    city: req.body.city
  }
  );

  HospitalModel.register(hospitalObject, req.body.password, (err, user) => {
    if (!err) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/search-patient/"+req.body.hospitalname);
      })
    }
    else{
      res.redirect("/")
    }
  })
})

app.post("/login/hospital", (req, res)=>{
  const hospital = new HospitalModel({
    hospitalname: req.body.hospitalname,
    password: req.body.password
  });
  req.login(patient, (err) => {
    if (!err) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/search-patient");
      })
    }
    else{
      res.redirect("/login/hospital");
    }
  })
})