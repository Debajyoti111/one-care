const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PatientModel = require("./models/patients");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://metal_oopa:metal_oopa@cluster0.fw2fq.mongodb.net/patients?retryWrites=true&w=majority"
);

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
