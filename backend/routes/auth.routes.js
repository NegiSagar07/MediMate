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


router.get('/doctor',findDoctor);
router.get('/chemist',findChemist);
router.get('/clinic',findClinic);
router.get('/hospital',findHospital);
router.get('/equipment',findEquipment);


export default router;
