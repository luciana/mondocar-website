import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Header } from '../../Components/index';
import CarouselImg from '../../assets/images/cars/IMG_2062.JPG';
// import { Container } from './styles';

export default function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="carousell">
        {/* <Carousel>
          <Carousel.Item >
            <div className="imageBlock d-block w-100">
            </div>
            <Carousel.Caption>
                <h1>Mondo Car</h1>
                <p>At Mondo Car we are experts in foreign and domestic cars.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
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
    </div>
  );
}

