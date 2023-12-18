import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.css";
import header1 from "../../images/header1.webp";
import header2 from "../../images/header2.webp";
import header3 from "../../images/header3.webp";
import pizarra from "../../images/pizarra.jpg";

function HomeCarousel() {
  return (
    <Carousel Zoom className="carousel">
      <Carousel.Item>
        <img
          className="carouselPics pizarra d-block"
          src={pizarra}
          alt="closed blackboard"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPics d-block" src={header2} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselPics d-block"
          src={header3}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPics d-block" src={header1} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
