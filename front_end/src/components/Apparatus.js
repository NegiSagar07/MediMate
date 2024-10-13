import React from 'react';
import { Link } from 'react-router-dom';

const Apparatus = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-gray-700 w-2/3">
      <Link to="/ctscan" className="p-2 bg-gray-200 rounded-md text-center">CT-Scan</Link>
      <Link to="/defibrillator" className="p-2 bg-gray-200 rounded-md text-center">Defibrillator</Link>
      <Link to="/dialysis" className="p-2 bg-gray-200 rounded-md text-center">Dialysis</Link>
      <Link to="/ecmo" className="p-2 bg-gray-200 rounded-md text-center">ECMO</Link>
      <Link to="/mri" className="p-2 bg-gray-200 rounded-md text-center">MRI</Link>
      <Link to="/petscan" className="p-2 bg-gray-200 rounded-md text-center">PET-Scan</Link>
      <Link to="/ultrasound" className="p-2 bg-gray-200 rounded-md text-center">Ultrasound</Link>
      <Link to="/ventilator" className="p-2 bg-gray-200 rounded-md text-center">Ventilator</Link>
      <Link to="/xray" className="p-2 bg-gray-200 rounded-md text-center">X-Ray</Link>
    </div>
  );
};

export default Apparatus;
