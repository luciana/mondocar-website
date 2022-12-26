import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


const MapContainer = (item) => {

const k = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
 const mapStyles = {        
    height: "60vh",
    width: "100%"};
  const center = {
    lat: item.location.lat, 
    lng: item.location.lng     
  }
  return (
    <div>
     <LoadScript googleMapsApiKey={k} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={center}>
          {
            <MarkerF key={item.location.name} position={center}  />
          }
        </GoogleMap>
     </LoadScript>
     </div>
  )
}
export default MapContainer;