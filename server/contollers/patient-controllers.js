const patientSchema = require("../model/patientInformation")

// Fetch ALL patients from collection from DB
const getAllPatients = async (req, res, next)=>{
    let patients; 
    try{
        patients = await patientSchema.find()
    }catch(err){
        console.log(err)
    }
    if(!patients){
        return res.status(404).json({message: "No patients found"})
    }
    return res.status(200).json({patients})
}

const getbyID = async (req, res, next)=>{
    const id = req.params.id;
    let patient;
    try{
        patient = await patientSchema.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(404).json({message: "No patients found"})
    }
    return res.status(200).json({patient})
}

const addPatient = async(req, res, next) =>{
    const {name, email, phone_number, service_needed, insurance} = req.body;
    let patient;
    try{
        patient = new patientSchema({
            name,
            email,
            phone_number,
            service_needed,
            insurance
        });
        await patient.save();
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(200).json({message: "Unable To Add Patient"})
    }
    return res.status(201).json({patient})
};

const updatePatient = async (req, res, next) =>{
    const id = req.params.id;
    const {name, email, phone_number, service_needed, insurance} = req.body;
    let patient;
    try{
        patient = await patientSchema.findByIdAndUpdate(id,{
            name,
            email,
            phone_number,
            service_needed,
            insurance
        });
        patient = await patient.save()
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(404).json({message: "Unable To Update By This ID Value"})
    }
    return res.status(200).json({patient})
};

const deletePatient = async(req, res, next) =>{
    const id = req.params.id;
    let patient;
    try{
        patient = await patientSchema.findByIdAndDelete(id);
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(404).json({ message: "Unable to Delete By This ID"});
    }
    return res.status(200).json({message: "Patient Successfully Deleted"})
};

exports.getALLPatients = getAllPatients;
exports.getbyID = getbyID;
exports.addPatient = addPatient;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;