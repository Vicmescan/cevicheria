import Carousel from 'react-bootstrap/Carousel';
import '../../styles/home.css';
import header1 from '../../images/header1.png';
import header2 from '../../images/header2.jpg';
import header3 from '../../images/header3.jpg';

function HomeCarousel() {

  return (
    <Carousel fade className='carousel'>
      <Carousel.Item>
        <img
          className="carouselPics d-block"
          src={header2} alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselPics d-block"
          src={header3}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselPics d-block"
          src={header1}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;