import React, { useState } from 'react';

const HospitalRegister = () => {
  // Step 1: Initialize state for all fields
  const [hospitalData, setHospitalData] = useState({
    name: '',
    address: { street: '', city: '', state: '', postalCode: '' },
    contact: { phone: '', email: '' },
    services: '',
    facilities: { bedsAvailable: '', ICUAvailable: '', emergencyAvailable: false },
    rating: '',
    doctors: [{ name: '', specialization: '', experience: '' }],
    website: '',
    location: { latitude: '', longitude: '' }
  });

  // Step 2: Handle input changes for each section
  const handleChange = (e) => {
    const { name, value } = e.target;

    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNestedChange = (section, field) => (e) => {
    const { value } = e.target;
    setHospitalData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }));
  };

  const handleDoctorChange = (index, e) => {
    const { name, value } = e.target;
    const newDoctors = [...hospitalData.doctors];
    newDoctors[index][name] = value;
    setHospitalData((prevData) => ({
      ...prevData,
      doctors: newDoctors
    }));
  };

  const addDoctorField = () => {
    setHospitalData((prevData) => ({
      ...prevData,
      doctors: [...prevData.doctors, { name: '', specialization: '', experience: '' }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/auth/hospital', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hospitalData)
      });
      
      if (response.ok) {
        alert('Hospital registered successfully!');
      } else {
        alert('Error registering hospital.');
      }
    } catch (error) {
      console.error('Error registering hospital:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register Hospital</h2>
      <form onSubmit={handleSubmit}>
        {/* Hospital Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Hospital Name</label>
          <input
            type="text"
            name="name"
            value={hospitalData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Address Section */}
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Street</label>
          <input
            type="text"
            name="street"
            value={hospitalData.address.street}
            onChange={handleNestedChange('address', 'street')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={hospitalData.address.city}
              onChange={handleNestedChange('address', 'city')}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={hospitalData.address.state}
              onChange={handleNestedChange('address', 'state')}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={hospitalData.address.postalCode}
            onChange={handleNestedChange('address', 'postalCode')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Contact Section */}
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={hospitalData.contact.phone}
            onChange={handleNestedChange('contact', 'phone')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={hospitalData.contact.email}
            onChange={handleNestedChange('contact', 'email')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Location */}
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Latitude</label>
          <input
            type="number"
            name="latitude"
            value={hospitalData.location.latitude}
            onChange={handleNestedChange('location', 'latitude')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Longitude</label>
          <input
            type="number"
            name="longitude"
            value={hospitalData.location.longitude}
            onChange={handleNestedChange('location', 'longitude')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Services */}
        <div className="mb-4">
          <label className="block text-gray-700">Services (comma-separated)</label>
          <input
            type="text"
            name="services"
            value={hospitalData.services}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        {/* Facilities */}
        <h3 className="text-xl font-semibold mb-2">Facilities</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Beds Available</label>
          <input
            type="number"
            name="bedsAvailable"
            value={hospitalData.facilities.bedsAvailable}
            onChange={handleNestedChange('facilities', 'bedsAvailable')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ICU Beds Available</label>
          <input
            type="number"
            name="ICUAvailable"
            value={hospitalData.facilities.ICUAvailable}
            onChange={handleNestedChange('facilities', 'ICUAvailable')}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        {/* Doctors */}
        <h3 className="text-xl font-semibold mb-2">Doctors</h3>
        {hospitalData.doctors.map((doctor, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Doctor Name</label>
            <input
              type="text"
              name="name"
              value={doctor.name}
              onChange={(e) => handleDoctorChange(index, e)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        ))}
        
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
          Register Hospital
        </button>
      </form>
    </div>
  );
};

export default HospitalRegister;
