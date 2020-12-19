import React from 'react';
import { Header } from '../../Components/index';
import alpha from '../../assets/images/str_alpha.jpg';
import espresso from '../../assets/images/str_espresso.jpg';
import family from '../../assets/images/str_family.jpg';

// import { Container } from './styles';

export default function AboutUs() {

    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="AboutUstitle">
                <span>About Us</span>
            </div>
            <div className="contentAboutUS">
                <div className="RowAbout1">
                    <img src={family} alt="family"/>
                    <span>
                        Hi, my name is Pino. I am the co-owner of Mondo Car Repair. 
                        Welcome to our site. In this site, you will find information about our business, our work, and our season specials. 
                        You can also contact us via the <a>Appointment Scheduler</a>.
                        I'd like to tell you a little bit about the history of our Business. 
                        My father, Antonio, started the company 35 years ago in Baranello, a small town in the region of Molise, Italy. 
                        I grew up watching my father work on cars, specially the Alfa Romeos, his favorite. 
                    </span>
                </div>
                <div className="RowAbout2">
                    <img src={alpha} alt="alpha"/>
                    <span>
                        I am in the front left and my dad in the front right side of this picture.
                        After we moved to the United States, we opened the business in Twinsburg, Ohio. I have been part of Mondo Car with my father since then.
                        At Mondo Car, I can say that we are Italian car enthusiasts, not only because we are from Italy, 
                        but also because the country is the home of a great automobile industry. 
                        Automobile companies such as Ferrari, Maserati, Di Tomaso, Lamborghini, Alfa Romeo, FIAT, Bugatti, and many others were born in Italy. 
                        With style and advanced techniques, these Italian companies have fathered many world-class automobile machines. 
                        At Mondo car, we specialize in these cars as well as other European and Japanese brand names
                    </span>
                </div>
                <div className="RowAbout3">
                    <img src={espresso} alt="espresso"/>
                    <span>
                        Mondo Car is listed as a service directory in the Alfa Romeo Owners Club-USA (AROC-USA) website. 
                        For these and many other reasons, we have a passion for historic and modern Italian automobiles. 
                        We share with you some classic vehicles' from our friends and customer in this site. 
                        My favorite car is the 1957 Alfa Romeo Giulia Spider. I also own a historic 1969 FIAT millecento. 
                        I, absolutely, also love to drive the other cars such Audi, BMW and Mercedes. These are also great machines. 
                        If you are a car enthusiast, come and talk to us.
                        Stop by and have an espresso with us.
                        We appreciate your business!
                        Thanks, Pino.
                    </span>
                </div>
            </div>
        </div>
    );
}