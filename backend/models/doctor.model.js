import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    }, 
    doctorType : {
        type : String,
        required : true,
    },
    experience : {
        type : Number,
        required : true,
    },
    workAt : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : false,
    }, 
    dp : {
        type : Image,
        required : false,
    }
})

const Doctor = mongoose.connect('Doctor',doctorSchema);

export default Doctor;