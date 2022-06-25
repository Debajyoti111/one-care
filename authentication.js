require("dotenv").config();
const PatientsModel = require("./models/patients");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const app = express();
const passportLocalMongoose = require("passport-local-mongoose");
app.use(session({
    secret: process.env.SECRET,
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(PatientsModel.createStrategy()); //Creates the Session

passport.serializeUser(PatientsModel.serializeUser()); //Creates the cookie

passport.deserializeUser(PatientsModel.deserializeUser()); //Destroys the cookie

module.exports = passport;