import express from 'express';
import { login, logout, signup, hospital } from '../controller/auth.controller.js';


const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.post('/hospital',hospital)

export default router;
