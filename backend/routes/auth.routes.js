import express from 'express';
import { login, logout, signup, hospital, doctor, chemist, clinic, equipment } from '../controller/auth.controller.js';
import { findChemist, findClinic, findDoctor, findEquipment, findHospital } from '../controller/access.controller.js';


const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.post('/hospital',hospital);
router.post('/doctor',doctor);
router.post('/chemist',chemist);
router.post('/clinic',clinic);
router.post('/equipment',equipment);


router.get('/nearby-doctor',findDoctor);
router.get('/nearby-chemist',findChemist);
router.get('/nearby-clinic',findClinic);
router.get('/nearby-hospital',findHospital);
router.get('/nearby-equipment',findEquipment);


export default router;
