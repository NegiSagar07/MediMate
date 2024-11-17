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

export const findHospital = async (req, res) => {
  try {
    // Add debug logging
    console.log('Fetching hospitals...');

    const hospitals = await Hospital.find()
      .select('name location address contact rating facilities doctors services')
      .lean();

    // Debug log
    console.log('Found hospitals:', hospitals);

    if (!hospitals || hospitals.length === 0) {
      console.log('No hospitals found in database');
      return res.status(404).json({
        success: false,
        message: "No hospitals found"
      });
    }

    const formattedHospitals = hospitals.map(hospital => ({
      id: hospital._id,
      name: hospital.name || 'Unknown Hospital',
      location: {
        latitude: hospital.location?.latitude || 0,
        longitude: hospital.location?.longitude || 0
      },
      address: {
        street: hospital.address?.street || '',
        city: hospital.address?.city || '',
        state: hospital.address?.state || '',
        postalCode: hospital.address?.postalCode || ''
      },
      contact: {
        phone: hospital.contact?.phone || '',
        email: hospital.contact?.email || ''
      },
      rating: hospital.rating || 0,
      services: hospital.services || [],
      facilities: {
        bedsAvailable: hospital.facilities?.bedsAvailable || 0,
        ICUAvailable: hospital.facilities?.ICUAvailable || 0,
        emergencyAvailable: hospital.facilities?.emergencyAvailable || false
      },
      doctors: hospital.doctors?.map(doctor => ({
        name: doctor.name || 'N/A',
        specialization: doctor.specialization || 'N/A',
        experience: doctor.experience || 0
      })) || []
    }));

    // Debug log
    console.log('Sending formatted hospitals:', formattedHospitals);

    return res.status(200).json({
      success: true,
      count: formattedHospitals.length,
      data: formattedHospitals
    });

  } catch (error) {
    console.error("Error in findHospital:", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching hospital information",
      error: error.message
    });
  }
};

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