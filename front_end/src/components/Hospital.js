import React, { useState } from 'react';

const RegisterHospital = () => {
  // Step 1: Initialize state for all fields
  const [hospitalData, setHospitalData] = useState({
    name: '',
    address: { street: '', city: '', state: '', postalCode: '' },
    contact: { phone: '', email: '' },
    services: '',
    facilities: { bedsAvailable: '', ICUAvailable: '', emergencyAvailable: false },
    rating: '',
    timings: { openingTime: '', closingTime: '' },
    doctors: [{ name: '', specialization: '', experience: '' }],
    website: ''
  });

  // Step 2: Update state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setHospitalData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;

    setHospitalData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value
      }
    }));
  };

  const handleFacilitiesChange = (e) => {
    const { name, value } = e.target;

    setHospitalData((prevData) => ({
      ...prevData,
      facilities: {
        ...prevData.facilities,
        [name]: value
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

  // Step 3: Submit form data
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

  // Step 4: Render the form
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
            onChange={handleAddressChange}
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
              onChange={handleAddressChange}
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
              onChange={handleAddressChange}
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
            onChange={handleAddressChange}
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
            onChange={handleContactChange}
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
            onChange={handleContactChange}
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

        {/* Other fields like facilities, timings, doctors, and website can be added similarly */}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
          Register Hospital
        </button>
      </form>
    </div>
  );
};

export default RegisterHospital;
