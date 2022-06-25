const session = require("session");
const passport = require("passport");

const passportLocalMongoose = require("passport-local-mongoose");
app.use(session({

    secret: process.env.SECRET,
    
    resave:false,
    
    saveUninitialiazed:false});
    
    app.use(passport.initialize());
    
    app.use(passport.session());
    