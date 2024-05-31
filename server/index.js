const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

app.use(express.json());
const cors = require("cors");
app.use(cors());

const PORT = 3005;

const router = require("./routes/patient-routes")

app.use("/health", router)

mongoose.connect("mongodb+srv://LordMackatron:Rescue26@cluster0.hfasvak.mongodb.net/Clinic").then(()=> console.log("Connected To Database!!")).then(()=> console.log("Backend Server Listing on PORT" + PORT)).then(()=>{
    app.listen(PORT)
}).catch((err)=> console.log(err));