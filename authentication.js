const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const Patient = require("./models/patient");
const express = require("express");
const app = express();

app.use(session({
secret: process.env.SECRET,
resave:false,
saveUninitialiazed:false})
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Patient.createStrategy()); //Creates the Session
passport.serializeUser(Patient.serializeUser()); //Creates the cookie
passport.deserializeUser(Patient.deserializeUser());

module.exports = passport;