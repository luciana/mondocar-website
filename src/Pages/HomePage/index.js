import React from 'react';
import { Header } from '../../Components/index';
import { useGoogleMaps } from "react-hook-google-maps";



export default function HomePage() {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyC8ytbqfN7jHZE-yok4yfIaNUxE1qGJ2Mc",
    {
      center: { lat: 41.309825, lng: -81.431072 },
      zoom: 16,
    },
  );
  if (map) {
    new google.maps.Marker({ position: { lat: 41.309825, lng: -81.431072 }, map });
  }

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="Row1">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="imageBlock d-block w-100"></div>
              <div className="carousel-caption">
                <h1>Mondo Car</h1>
                <p>At Mondo Car we are experts in foreign and domestic cars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Row2">
        <div className="title">
          <span color="white">Who are we?</span>
        </div>
      </div>
      <div className="Row3">
        <div className="title">
          <span color="white">Come to see us!</span>
        </div>
        <div className="mapAdress">
          <div ref={ref} className="map">
          </div>
          <a target="_blank" href="http://www.google.com/maps?f=q&hl=en&q=9713+Ravenna+Rd,+Twinsburg+Ohio+44087+USA&sll=37.0625,-95.677068&sspn=33.29802,59.238281&ie=UTF8&ll=41.309825,-81.431072&spn=0.007704,0.014462&z=16&iwloc=addr&om=1">
            9713 Ravenna Rd. Twinsburg Ohio 44087
            </a>
        </div>
      </div>
    </div>
  );
}

