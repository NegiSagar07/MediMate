import React from 'react';
import { useLocation } from 'react-router-dom';

const AboutHospital = () => {
  const location = useLocation();
  const hospital = location.state?.hospital;

  if (!hospital) {
    return <div className="text-center text-lg font-semibold text-gray-600">No hospital information available.</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gradient-to-b from-blue-50 to-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-6">{hospital.name || 'Hospital Information'}</h2>

      {/* General Info */}
      <div className="space-y-4 mb-6">
        <p className="text-lg text-gray-700"><b className="text-blue-700">Address:</b> {hospital.address?.street || 'N/A'}, {hospital.address?.city || 'N/A'}</p>
        <p className="text-lg text-gray-700"><b className="text-blue-700">Phone:</b> {hospital.contact?.phone || 'N/A'}</p>
        <p className="text-lg text-gray-700"><b className="text-blue-700">Email:</b> {hospital.contact?.email || 'N/A'}</p>
        <p className="text-lg text-gray-700"><b className="text-blue-700">Description:</b> {hospital.description || 'No additional information available.'}</p>
      </div>

      {/* Facilities Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Facilities</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>Beds Available:</b> {hospital.facilities?.bedsAvailable || 0}</li>
          <li><b>ICU Available:</b> {hospital.facilities?.ICUAvailable || 0}</li>
          <li><b>Emergency Available:</b> {hospital.facilities?.emergencyAvailable ? 'Yes' : 'No'}</li>
        </ul>
      </div>

      {/* Doctors Section */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Doctors</h3>
        <ul className="space-y-4 text-gray-700">
          {hospital.doctors?.length > 0 ? (
            hospital.doctors.map((doctor, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <p><b>Name:</b> {doctor.name || 'N/A'}</p>
                <p><b>Specialization:</b> {doctor.specialization || 'N/A'}</p>
                <p><b>Experience:</b> {doctor.experience || 0} years</p>
              </li>
            ))
          ) : (
            <p>No doctors listed.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AboutHospital;
