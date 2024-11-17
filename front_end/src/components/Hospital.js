import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useNavigate} from 'react-router-dom'

const Hospital = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  const navigate = useNavigate(); 

  const selectHospital = (hospital) => {
    navigate('/about-hospital', {state : {hospital}});

  }

  useEffect(() => {
    const fetchNearbyHospital = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/auth/nearby-hospital');
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to fetch hospitals');
        }

        if (result.success && result.data) {
          setLocations(result.data);
        } else {
          throw new Error('No data received from server');
        }
      } catch (error) {
        setError(error.message || 'Error fetching hospitals');
      } finally {
        setLoading(false);
      }
    };

    fetchNearbyHospital();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (locations.length > 0 && !mapRef.current && mapContainerRef.current) {
      try {
        const map = L.map(mapContainerRef.current).setView([29.8547, 77.8937], 9);
        mapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const hospitalIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/128/13721/13721284.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        locations.forEach(hospital => {
          const { latitude, longitude } = hospital.location || {};

          if (latitude && longitude) {
            const popupContent = `
              <div class="hospital-popup">
                <h3 class="font-semibold text-blue-600">${hospital.name || 'Unknown Hospital'}</h3>
              </div>
            `;

            L.marker([latitude, longitude], { icon: hospitalIcon })
              .addTo(map)
              .bindPopup(popupContent)
              .openPopup();
          }
        });
      } catch (error) {
        setError("Error initializing map");
      }
    }
  }, [locations]);

  if (loading) {
    return <div className="text-center text-xl py-4">Loading hospitals...</div>;
  }

  if (error) {
    return (
      <div className="error-message bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">
        <h3 className="font-semibold text-lg">Error</h3>
        <p>{error}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => window.location.reload()}
          aria-label="Retry fetching hospitals"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Nearby Hospitals</h2>
      {locations.length === 0 ? (
        <p className="text-center text-gray-600">No hospitals found in your area</p>
      ) : (
        <div 
          ref={mapContainerRef} 
          id="map"
          className="h-96 w-full rounded-lg shadow-lg overflow-hidden mb-6"
        />
      )}
      
      {/* List of Nearby Hospitals */}
      <ul className="space-y-4">
        {locations.slice(0, 10).map((hospital, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <button 
              onClick={() => selectHospital(hospital)}
              className="text-lg font-semibold text-gray-800"
            >
              {hospital.name || 'Unknown Hospital'}
            </button>
            <p className="text-gray-700">
              <b>Address:</b> {hospital.address?.street || 'N/A'}, {hospital.address?.city || 'N/A'}
            </p>
            <p className="text-gray-700"><b>Phone:</b> {hospital.contact?.phone || 'N/A'}</p>
            <p className="text-gray-700"><b>Email:</b> {hospital.contact?.email || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hospital;
