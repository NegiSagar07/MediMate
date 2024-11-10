import React, { useState } from 'react';

const Equipment = () => {
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents form from refreshing the page

        const info = {
            name,
            latitude,
            longitude,
            address
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/equipment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(info),
            });
            if (!response.ok) {
                throw new Error("Failed to register equipment");
            }
            alert("Equipment registered successfully");
            // Optionally clear form after successful submission
            setName('');
            setLatitude('');
            setLongitude('');
            setAddress('');
        } catch (error) {
            console.error("Error:", error.message);
            alert("Error: " + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Equipment Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Latitude'
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Longitude'
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Equipment;
