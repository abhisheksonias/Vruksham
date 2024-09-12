import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidnJ1a3NoYW0iLCJhIjoiY20wcnlqMDAwMGU3bzJpc2I3NHZxM2Y4ayJ9.Ybh0ffL5LPVmdcFr5Vpomw';

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [70.806543, 22.352239], 
      zoom: 12, 
    });

    // Add the Mapbox Geocoder to the map
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken, 
      mapboxgl: mapboxgl, 
    });

    // Add geocoder control to the map
    mapRef.current.addControl(geocoder);

    // Add geolocation control to the map to track user location
    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true, 
        showUserHeading: true, 
      })
    );

    // Fetch nearby hospitals from Overpass API
    const fetchNearbyHospitals = (latitude, longitude) => {
      const radius = 7000; // 7 km radius

      const query = `
        [out:json];
        (
          node["amenity"="hospital"](around:${radius}, ${latitude}, ${longitude});
        );
        out body;
      `;

      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.elements.forEach((hospital) => {
            const hospitalLngLat = [hospital.lon, hospital.lat];
            const hospitalName = hospital.tags.name || 'Hospital';

            // Add markers for hospitals
            new mapboxgl.Marker({ color: 'red' })
              .setLngLat(hospitalLngLat)
              .setPopup(new mapboxgl.Popup().setHTML(`<h3>${hospitalName}</h3>`))
              .addTo(mapRef.current);
          });
        })
        .catch((error) => console.error('Error fetching hospitals:', error));
    };

    // Get the user's location and fetch hospitals
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        mapRef.current.setCenter([longitude, latitude]);
        fetchNearbyHospitals(latitude, longitude);
      },
      (error) => console.error('Error getting user location:', error),
      { enableHighAccuracy: true }
    );

    // Cleanup on component unmount
    return () => {
      mapRef.current.remove(); // Remove the map instance
    };
  }, []);

  return (
    <div>
      {/* Map container */}
      <div ref={mapContainerRef} style={{ height: '70vh', width: '100%' }} />
    </div>
  );
};

export default Map;
