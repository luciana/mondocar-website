import React from 'react';
import { Header, Footer} from '../../Components/index';
import Map from '../../Components/Map';
import Reviews from '../../Components/Reviews';
import Schedule from '../../Components/Schedule';
import LogoWorld from '../../assets/mondologo-world.png';
import AnalyticsEventTracker from '../../Components/AnalyticsEventTracker';
import ReactGA from 'react-ga';


export default function HomePage() {

  const location = { 
    name: "Mondo Car Repair, LLC",
    lat: 41.3130179, 
    lng: -81.4379945,
    address: '9713 Ravenna Road, Twinsburgh, Ohio 44087',
  };
  const TRACKING_ID = "'UA-3850337-1";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
  const gaEventTracker = AnalyticsEventTracker('Home Page');

  return (
    <div>      
      <div className="header">
        <Header></Header>
      </div>
      <header className="masthead">
            <div className="container">               
              <img className="logoWorld" src={LogoWorld} alt="Mondo Car Repair Logo" />    
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase mx-3" href="tel:13304050555" onClick={()=>gaEventTracker('call')}>Call us Today</a>
                <a className="btn btn-success btn-xl text-uppercase" onClick={()=>gaEventTracker('schedule_service_link')} href="#contact">Schedule Service</a>               
                <div><span> or dial +1 (330) 405-0555</span></div>
            </div>
        </header>     
        <div className="container page-section" id="location">
            <div className=" section-subheading text-muted">At Mondo Car we are a complete auto service shop. 
                  We service your vehicle from an oil change to major repairs. 
                  We specialize in repairing European, Japanese and Domestic automobiles.
                  Come and visit us at {location.address}
            </div>
        </div>
        <div>
        <div className="page-section  container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Visit us </h2>
            <h3 className=" text-muted">{location.address}</h3>
          </div>
          </div>
          <Map location={location} />
        </div>
        <Schedule /> 
        <div className="page-section bg-light" id="testimonial">
            <div className="container">
                <div className="text-center">                    
                    <h2 className="section-subheading text-muted">Our customers are satisfied</h2>
                </div>
                <div className="row">                                    
                  <Reviews />  
                </div>
            </div>
        </div>
        <div>
          <div className="  footerBase">
            <span> Call us on Phone: <a href="tel: (330) 405-0555">(330) 405-0555</a> </span>
            <span>Send us a email: <a href="mailto:autoservice@mondocaronline.com">autoservice@mondocaronline.com</a>          </span>
            <span>Address: {location.address}</span>
            <span>Mon. - Fri  8am - 5pm</span>
            <span>Sat - Sun: Closed</span>
            </div>
        </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

