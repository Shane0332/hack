import React, { useState, useEffect } from 'react';
import { loadScript } from '@google/maps';
import { GoogleMap, LoadScript, Marker, SearchBox, InfoWindow } from '@react-google-maps/api';

const libraries = ['places']; // Include the Places library for search functionality

const center = { lat: 40.7128, lng: -74.0059 }; // Replace with your desired initial center coordinates

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const loadMap = async () => {
    try {
      await loadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use environment variable
        libraries,
      });
      const google = await window.google;
      const mapInstance = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 11,
      });
      setMap(mapInstance);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  };

  useEffect(() => {
    loadMap();
  }, []);

  const handleSearchBoxPlaces = (results) => {
    const safeAreaMarkers = results.filter((place) => place.name.toLowerCase().includes('safe area'));
    setMarkers(safeAreaMarkers);
  };

  const handleSave = () => {
    // Implement logic to save the selected place (if any)
    console.log('Saving place:', selectedPlace); // For demonstration purposes
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} zoom={11} center={center} zoomControl={true} map={map} onClick={() => setSelectedPlace(null)}>
          <SearchBox
            bounds={map?.getBounds()}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={handleSearchBoxPlaces}
          >
            <input
              type="text"
              placeholder="Search for safe areas"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `100%`,
                padding: `0.625em 1em`,
                borderRadius: `4px`,
                fontSize: `16px`,
                outline: `none`,
                boxShadow: `0 0 0 1px rgba(0, 0, 0, 0.15)`,
                lineHeight: `normal`,
                textOverflow: `ellipsis`,
                height: `40px`,
                backgroundColor: `rgb(255, 255, 255)`,
              }}
            />
          </SearchBox>
          {markers.map((marker) => (
            <Marker
              key={marker.place_id}
              position={marker.geometry.location}
              onClick={() => handleMarkerClick(marker)}
            >
              {selectedPlace === marker && (
                <InfoWindow onCloseClick={() => setSelectedPlace(null)}>
                  <div>{marker.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
      <button onClick={handleSave} disabled={!selectedPlace}>
        Save Safe Area
      </button>
    </div>
  );
};

export default MapComponent;
