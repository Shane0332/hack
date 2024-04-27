
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const apiKey = "AIzaSyCj5mlYEy09B3Mr2nN4PAJXYA6CAvyq01k";

function MapPlace() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-500">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          center={currentPosition} 
          zoom={10}
          mapContainerStyle={{ height: "50%", width: "50%" }}
          >
          {currentPosition && (
            <Marker
              position={currentPosition}
              icon={{ url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" }} // Custom marker icon for current location
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapPlace
