import mongoose  from "mongoose";
 
const appointmentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : Number,
        required : false
    }
})

const Appointment = mongoose.connect('Appointment', appointmentSchema);

export default Appointment;