import React, {useState} from 'react';
import { Header, Footer} from '../../Components/index';
import { useGoogleMaps } from "react-hook-google-maps";
import { Card, Form ,Button } from 'react-bootstrap';
import $ from 'jquery';



export default function HomePage() {
  const [ Name, setName ] = useState("");
  const [ Email, setEmail ] = useState("");
  const [ Comments, setComments ] = useState("");
  // const { ref, map, google } = useGoogleMaps(
  //   "AIzaSyC8ytbqfN7jHZE-yok4yfIaNUxE1qGJ2Mc",
  //   {
  //     center: { lat: 41.309825, lng: -81.431072 },
  //     zoom: 16,
  //   },
  // );
  // if (map) {
  //   new google.maps.Marker({ position: { lat: 41.309825, lng: -81.431072 }, map });
  // }

  const ResetForm = () => {
    setName("");
    setEmail("");
    setComments("");
  }

  const SendEmail = (event) => {
    event.preventDefault();
    console.log(Name);
    console.log(Email);
    console.log(Comments);
    alert("Thanks for make a appointment with us");
    ResetForm();
  }


  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="Row1">
        <div id="" className="carousel slide" data-ride="carousel">
          <div >
            <div >
              <div className="imageBlock d-block w-100"></div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="Row2">
        
        <div className="content">
          <p>At Mondo Car we are experts in foreign and domestic cars. 
                  We are a complete auto service shop. 
                  We are qualified to service your vehicle from an oil change to transmission repair. 
                  We specialize in repairing European and Japanese automobiles in the Northern Ohio area.
                  </p>
                  <a href="tel:13304050555">Call us today! </a>
            {/* <Card>
              <Form id="appointmentForm" onSubmit={SendEmail}>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                  value={Name}
                  onChange={event => setName(event.target.value)}
                ></Form.Control>
                <Form.Label>email:</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  onChange={event => setEmail(event.target.value)}
                ></Form.Control>
                <Form.Label>Comments:</Form.Label>
                <Form.Control as="textarea"
                  value={Comments}
                  onChange={event => setComments(event.target.value)}
                ></Form.Control>
                <Button type="submit">Schedule</Button>
              </Form>
            </Card> */}
        </div>
      </div>
      <div className="Row3">
      <div className="title">
          <span color="">Contact Us</span>
        </div>
        <div className="content">
            Call us on Phone: <a href="tel: (330) 405-0555">(330) 405-0555</a> <br/>
            Send us a email: <a href="mailto:autoservice@mondocaronline.com">autoservice@mondocaronline.com</a><br/>           
            Address: 9713 Ravenna Rd. Twinsburg Ohio 44087<br/>
            Mon. - Fri: 08.00am - 5pm<br/>            
            Sat - Sun: Closed<br/>
            Closed on December 20th and re-opened on January 5th. <br/>
          </div>
        {/* <div className="title">
          <span color="white">Come to see us!</span>
        </div> */}
        <div className="mapAdress">
          {/* <div ref={ref} className="map">
          </div> */}
          {/* <a style={{color:"white", textDecoration: "underline"}} target="_blank" href="http://www.google.com/maps?f=q&hl=en&q=9713+Ravenna+Rd,+Twinsburg+Ohio+44087+USA&sll=37.0625,-95.677068&sspn=33.29802,59.238281&ie=UTF8&ll=41.309825,-81.431072&spn=0.007704,0.014462&z=16&iwloc=addr&om=1">
            9713 Ravenna Rd. Twinsburg Ohio 44087
          </a> */}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

