import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
    longitude : {
        type : Number,
        required : true,
    }, 
    address : {
        type : String,
        required : true
    }
})

const Clinic = mongoose.model('Clinic', clinicSchema);

export default Clinic;