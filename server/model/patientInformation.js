const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String, 
        required: true,
    }, 
    phone_number:{
        type: String,
        required: true, 
    },
    service_needed:{
        type: String,
        required: true,
    },
    insurance:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('patientInformation', patientSchema);