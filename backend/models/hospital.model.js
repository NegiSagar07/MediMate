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
  timings: {
    openingTime: { type: String, required: true }, // Example: "08:00 AM"
    closingTime: { type: String, required: true }  // Example: "08:00 PM"
  },
  doctors: [{
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true } // Years of experience
  }],
  website: {
    type: String, // If they have a website
    trim: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);


export default Hospital;