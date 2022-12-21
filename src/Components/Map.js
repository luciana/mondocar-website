import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";
import './map.css'

function Map({ location, zoomLevel }) {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBxqaSWIPZTi2ocSMUDOG_Izhd8iwy_Bbo",
    {
      center: { lat: location.lat, lng: location.lng },
      zoom: zoomLevel,
    },
  );

  if (map) {    
    new google.maps.Marker({ position: location, map });
  }

return (
  <div className="map">
    <div className="google-map">
      <div ref={ref} className="map-render" />  
    </div>
  </div>
);
}
export default Map;