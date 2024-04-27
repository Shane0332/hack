import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj5mlYEy09B3Mr2nN4PAJXYA6CAvyq01k&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
    // Initialize map after script is loaded
    window.initMap = this.initMap;
  }

  initMap = () => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const userLocation = { lat: latitude, lng: longitude };
      // Create map instance centered at user's location
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: userLocation,
        zoom: 10
      });
      // Add marker for user's location
      new window.google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Your Location'
      });
      // Set map instance to state
      this.setState({ map });
    }, error => {
      console.error('Error getting user location:', error);
    });
  }

  render() {
    return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
  }
}

export default Map;