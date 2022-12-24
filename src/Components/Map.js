import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";
import './map.css'

function Map({ location, zoomLevel }) {
  //const k = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

  const { ref, map, google } = useGoogleMaps(
    'AIzaSyBxqaSWIPZTi2ocSMUDOG_Izhd8iwy_Bbo',
    {
      center: { lat: location.lat, lng: location.lng },
      zoom: zoomLevel,
    },
  );

  if (map) {    
    new google.maps.Marker({ position: location, map });
  }

return (
  <div>    
  <div className="map">
    <div className="google-map">
      <div ref={ref} className="map-render" />  
    </div>
  </div>

  </div>
);
}
export default Map;