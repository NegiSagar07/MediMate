import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
import Hospital from '../models/hospital.model.js';
import Doctor from '../models/doctor.model.js';
import Clinic from '../models/clinic.model.js';
import Chemist from '../models/chemist.model.js';
import Equipment from '../models/equipment.model.js';


export const signup = async(req,res) => {
    const {name, email, password} = req.body;
    try {
        const usermail = await User.findOne({email});
        if(usermail) {
            return res.status(400).json({message : "email already exist"})
        }
        const hashpassword = await bcrypt.hash(password,10);

        const newuser = new User({name, email, password: hashpassword});
        await newuser.save();
        res.status(200).json({message : "user created successfully"});
        console.log("user created, name : ",name);
    } catch (error) {
        console.log("Error=>",error);
        res.send({error : "Error creating user"});
    }
}

export const login = async(req,res) => {
    const {email, password} = req.body;
    try {
        const useremail = await User.findOne({email});
        if(!useremail) {
            return res.status(400).json({message : "email does not exist"});
        }
        const ispassword = await bcrypt.compare(password, useremail.password);
        if(!ispassword) {
            return res.status(400).json({message : "invalid email or password"});
        }
        res.status(200).json({message : "login successfully"});
    } catch (error) {
        console.error("Error => ",error);
    }
}

export const logout = (req, res) => {
    console.log("User logged out");
    res.status(200).json({ message: "Logout successful" });
}

export const hospital = async (req, res) => {
    try {
        const {name, address, contact, services, facilities, rating, timings, doctors, website} = req.body;
        if (!name || !address || !contact || !services || !timings || !doctors) {
            return res.status(400).json({ error: "Please provide all required fields." });
        }
        
        const newHospital = new Hospital({
            name,
            address : {
                street: address.street,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode
            },
            contact: {
                phone: contact.phone,
                email: contact.email
            },
            services, // Array of services (e.g., ["X-ray", "CT-scan"])
            facilities: {
                bedsAvailable: facilities.bedsAvailable,
                ICUAvailable: facilities.ICUAvailable,
                emergencyAvailable: facilities.emergencyAvailable
            },
            rating: rating || 0, // Default rating is 0 if not provided
            timings: {
                openingTime: timings.openingTime,
                closingTime: timings.closingTime
            },
            doctors, // Array of doctors
            website
        });
        await newHospital.save();
        res.status(201).json({
            message : "hospital registered successfully",
            hospital : newHospital
        })
    } catch (error) {
        console.error("Error registering hospital:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
    
}

export const doctor = async (req, res) => {
    const {name, doctorType, expereince, workAt, age, dp} = req.body;
    try {
        if(name === "" || doctorType === "" || expereince === "" || workAt === "") {
            return res.status(200).json({message : "please fill all required fields:"})
        } 

        const newDoctor = new Doctor({name, doctorType, expereince, workAt, age, dp});
        await newDoctor.save();
        res.status(200).json({message : "Doctor registered successfully"})
        console.log("doctor created : ",name);
    } catch (error) {
        console.error("Error : ",error);
    }

}

export const clinic = async (req, res) => {
    const {name, latitude, longitude, address} = req.body;
    try {
        if(name === "" || latitude === "" || longitude === "" || address === "") {
            return res.status(400).json({message : "please fill all fields"});
        }

        const newClinic = new Clinic({name, latitude, longitude, address});
        await newClinic.save();
    } catch (error) {
        console.error("Error : ",error);
    }
}
  
export const chemist = async (req, res) => {
    const {name, latitude, longitude, address} = req.body;
    try {
        if(name === "" || latitude === "" || longitude === "" || address === "") {
            return res.status(400).json({message : "please fill all fields"});
        }

        const newChemist = new Chemist({name, latitude, longitude, address});
        await newChemist.save();
    } catch (error) {
        console.error("Error : ",error);
    }
}

export const equipment = async (req, res) => {
    const {name, latitude, longitude, address} = req.body;
    try {
        if(name === "" || latitude === "" || longitude === "" || address === "") {
            return res.status(400).json({message : "please fill all fields"});
        }

        const newEquipment = new Equipment({name, latitude, longitude, address});
        await newEquipment.save();
    } catch (error) {
        console.error("Error : ",error);
    }
}