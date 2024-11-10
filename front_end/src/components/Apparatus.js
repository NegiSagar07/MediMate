import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Apparatus = () => {
  const [equipmentList, setEquipmentList] = useState([]); // State for storing fetched data
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipmentList = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/equipment');
        if (!response.ok) {
          throw new Error("Failed to fetch equipment list");
        }
        const list = await response.json();
        setEquipmentList(list); // Store the fetched list in state
      } catch (error) {
        setError("Error: " + error.message);
      }
    };

    fetchEquipmentList(); // Call the async function
  }, []); // Empty dependency array, runs only once on mount

  return (
    <div className="grid grid-cols-3 gap-4 text-gray-700 w-2/3">
      {error && <p className="text-red-500">{error}</p>}
      
      {equipmentList.length > 0 ? (
        equipmentList.map((equipment, index) => (
          <Link key={index} to={`/${equipment.slug}`} className="p-2 bg-gray-200 rounded-md text-center">
            {equipment.name}
          </Link>
        ))
      ) : (
        <p>Loading available equipment...</p>
      )}
    </div>
  );
};

export default Apparatus;
