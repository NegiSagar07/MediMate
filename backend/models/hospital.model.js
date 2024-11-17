import mongoose from 'mongoose';    

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  services: {
    type: [String], // Example: ["X-ray", "CT-scan", "ICU", "Emergency"]
    required: true
  },
  facilities: {
    bedsAvailable: { type: Number, default: 0 },
    ICUAvailable: { type: Number, default: 0 },
    emergencyAvailable: { type: Boolean, default: false }
  },
  rating: {
    type: Number, // Example: Average rating out of 5
    default: 0
  },
  doctors: [{
    name: { type: String, required: false },
    specialization: { type: String, required: false },
    experience: { type: Number, required: false } // Years of experience
  }],
  website: {
    type: String, // If they have a website
    trim: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  location : {
    latitude : {type : Number, required : true},
    longitude : {type : Number , required : true},
  }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);


export default Hospital;