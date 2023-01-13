import Carousel from 'react-bootstrap/Carousel';
import header1 from '../images/header1.png';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
import '../index.css';

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carouselPics d-block w-100"
          src={header1} alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselPics d-block w-100"
          src={header2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselPics d-block w-100"
          src={header3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;