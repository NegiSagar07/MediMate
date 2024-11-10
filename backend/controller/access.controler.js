import Chemist from "../models/chemist.model";
import Clinic from "../models/clinic.model";
import Doctor from "../models/doctor.model";
import Equipment from "../models/equipment.model";
import Hospital from "../models/hospital.model";


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