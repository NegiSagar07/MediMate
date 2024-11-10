import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    latitude : {
        type : Number,
        required : true,
    },
    longitude : {
        type: Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    }
})

const Equipment = mongoose.model('Equipment',equipmentSchema);

export default Equipment;