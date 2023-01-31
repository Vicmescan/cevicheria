import { Navbar, Row, Col, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <Navbar className="footer">
      <Row className="row-container d-flex justify-content-around text-center">
        <Col sm lg="3">
          <h5>CONTACTO</h5>
          <hr></hr>
          <p className="footer-link">
            <a
              href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> Dresdenner Straße 120{" "}
            </a>
          </p>
          <p>10999 Berlin</p>
          <p className="footer-link">
            <a href="03055624038">
              <BsFillTelephoneFill /> 030-55624038
            </a>
          </p>
          <p className="footer-link">
            <a
              href={"mailto: info@cevicheria-berlin.com"}
              target="_blank"
              rel="noreferrer"
            >
              <GrMail /> info@cevicheria-berlin.com{" "}
            </a>
          </p>
        </Col>
        <Col sm lg="3">
          <h5>HORARIO</h5>
          <hr></hr>
          <p>Lunes a Sábados: a partir de las 18h</p>
          <p>Domingos Cerrados</p>
          <Container className="d-flex justify-content-around">
            <a
              className="footer-link"
              href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: "2.6rem" }}>
                <FaMapMarkerAlt />
              </IconContext.Provider>
            </a>
            <a
              className="footer-link"
              href="https://www.facebook.com/CevicheriaBerlin/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: "2.5rem" }}>
                <BsFacebook />
              </IconContext.Provider>
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/cevicheria.berlin/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: "3rem" }}>
                <AiFillInstagram />
              </IconContext.Provider>
            </a>
          </Container>
        </Col>
      </Row>
    </Navbar>
  );
}

export default Footer;
