import Chemist from "../models/chemist.model.js";
import Clinic from "../models/clinic.model.js";
import Doctor from "../models/doctor.model.js";
import Equipment from "../models/equipment.model.js";
import Hospital from "../models/hospital.model.js";


export const findDoctor = async(req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        console.log("Error : ",error);
        res.status(400).json({message : "error while fetching doctors"});
    }
}

export const findHospital = async(req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals);
    } catch (error) {
        console.log("Error :",error);
        res.status(400).json({message : "error while fetching the hospital"});
    }
}

export const findChemist = async (req, res) => {
    try {
        const chemists = await Chemist.find();
        res.status(200).json(chemists);
    } catch (error) {
        console.log("Error :",error);
        res.status(400).json({meesage : "error while fetching the chemist"});
    }
}

export const findClinic = async(req, res) => {
    try {
        const clinics = await Clinic.find();
        res.status(200).json(clinics);
    } catch (error) {
        console.log("Error : ",error);
        res.status(400).json({message : "error while fetching the clinic"});
    }
}

export const findEquipment = async (req, res) => {
    try {
        const equipments = await Equipment.find();
        res.status(200).json(equipments);
    } catch (error) {
        console.error("Error : ",error);
        res.status(400).json({message : "error while fetching the equipment"});
    }
}