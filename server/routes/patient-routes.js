const express = require("express");
const router = express.Router();

const patientControllers = require("../controllers/patient-controllers")

router.get("/",  patientControllers.getALLPatients);

router.get("/:id", patientControllers.getbyID);

router.post("/", patientControllers.addPatient);

router.put("/:id", patientControllers.updatePatient);

router.delete("/:id", patientControllers.deletePatient);

module.exports = router