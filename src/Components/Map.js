import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


const MapContainer = (item) => {

 const mapStyles = {        
    height: "60vh",
    width: "100%"};
  const center = {
    lat: item.location.lat, 
    lng: item.location.lng     
  }
  return (
    <div>
     <LoadScript
       googleMapsApiKey='AIzaSyBxqaSWIPZTi2ocSMUDOG_Izhd8iwy_Bbo'>
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