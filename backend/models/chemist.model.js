import mongoose from "mongoose";

const chemistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
    longitude : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const Chemist = mongoose.model('Chemist',chemistSchema);

export default Chemist;             