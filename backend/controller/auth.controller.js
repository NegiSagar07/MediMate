import User from '../models/user.model.js';
import bcrypt from 'bcrypt'


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
  };
  