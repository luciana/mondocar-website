import React, {useState} from 'react';
import { Header, Footer} from '../../Components/index';
import { useGoogleMaps } from "react-hook-google-maps";
import LogoWorld from '../../assets/mondologo-world.png';
//import { Card, Form ,Button } from 'react-bootstrap';
//import $ from 'jquery';



export default function HomePage() {
  // const [ Name, setName ] = useState("");
  // const [ Email, setEmail ] = useState("");
  // const [ Comments, setComments ] = useState("");

  const uluru = { lat: 41.309825, lng: -81.431072};
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBxqaSWIPZTi2ocSMUDOG_Izhd8iwy_Bbo",
    {
      center: { lat: 41.309825, lng: -81.431072 },
      zoom: 16,
    },
  );

  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: uluru, map });
  }


  return (
    <div>      
      <div className="header">
        <Header></Header>
      </div>
      <header className="masthead">
            <div className="container">               
              <img className="logoWorld" src={LogoWorld} alt="Mondo Car Repair Logo" />    
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="tel:13304050555">Call us Today!</a>
                <div><span> or dial +1 (330) 405-0555</span></div>
            </div>
        </header>     
        <div className="container page-section" >
            <span className=" section-subheading text-muted">At Mondo Car we are experts in foreign and domestic cars. 
                  We are a complete auto service shop. 
                  We can service your vehicle from an oil change to major repairs. 
                  We specialize in repairing European and Japanese automobiles in the Northern Ohio area.
                  </span>
        </div>
        <div className="container page-section" id="services">       
                 <div ref={ref} style={{ width: 500, height: 300 }} />            
        </div>
        <section>
          <div className="container page-section">
            Call us on Phone: <a href="tel: (330) 405-0555">(330) 405-0555</a> <br/>
            Send us a email: <a href="mailto:autoservice@mondocaronline.com">autoservice@mondocaronline.com</a><br/>           
            Address: 9713 Ravenna Rd. Twinsburg Ohio 44087<br/>
            Mon. - Fri  8am - 5pm<br/>            
            Sat - Sun: Closed<br/>    
            </div>
        </section>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

