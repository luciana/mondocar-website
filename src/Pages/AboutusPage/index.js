import React from 'react';
import ReactGA from 'react-ga';
import { Header, Footer } from '../../Components/index';
import alpha from '../../assets/images/str_alpha.jpg';
import espresso from '../../assets/images/str_espresso.jpg';
import family from '../../assets/images/str_family.jpg';

const TRACKING_ID = "'UA-3850337-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

export default function AboutUs() {

    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="page-section bg-light" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About Mondo Car Repair</h2>
                        <h3 className="section-subheading text-muted">your friendly neighbohood car shop</h3>
                    </div>
                    <div className="contentAboutUS">
                        <div className="RowAbout1 page-section">
                            <img src={family} alt="family"/>
                            <span>
                                Hi, my name is Pino. I am the owner of Mondo Car Repair. 
                                Welcome to our site. In this site, you will find information about our business, our work, and how to contact us for a visit.                               
                                I'd like to tell you a little bit about the history of Mondo Car Repair, Inc. 
                                My father, Antonio, started the company 35 years ago in Baranello, a small town in the region of Molise, Italy. 
                                I grew up watching my father work on cars, specially the Alfa Romeos, his favorite. 
                            </span>
                        </div>
                        <div className="RowAbout2 page-section">
                            <img src={alpha} alt="alpha"/>
                            <span>
                                I am in the front left and my dad in the front right side of picture above.
                                After we moved to the United States, we opened the business in Twinsburg, Ohio. I have been part of Mondo Car with my father since then.
                                At Mondo Car, I can say that we are Italian car enthusiasts, not only because we are from Italy, 
                                but also because the country is the home of a great automobile industry. 
                                Automobile companies such as Ferrari, Maserati, Di Tomaso, Lamborghini, Alfa Romeo, FIAT, Bugatti, and many others that were born in Italy. 
                                With style and advanced techniques, these Italian companies have fathered many world-class automobile machines.                               
                            </span>
                        </div>
                        <div className="RowAbout3 page-section">
                            <img src={espresso} alt="espresso"/>
                            <span>
                                Mondo Car is listed as a service directory in the Alfa Romeo Owners Club-USA (AROC-USA) website. 
                                For these and many other reasons, we have a passion for historic and modern Italian automobiles. 
                                If you are a car enthusiast, come and talk to us.
                                Stop by and have an espresso with us.
                                We appreciate your business!
                                Thanks, Pino.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
}