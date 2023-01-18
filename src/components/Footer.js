import { Card, CardGroup } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <CardGroup className="footer">
      <Card className="text-center footer-card">
        <Card.Body>
          <Card.Title>CONTACTO</Card.Title>
          <hr></hr>
          <Card.Text>
            <p className="footer-link">
              {" "}
              <a
                href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
                target="_blank"
                rel="noreferrer"
              >
                Dresdenner Straße 120{" "}
              </a>
            </p>

            <p>10999 Berlin</p>
            <p>Tel: 030-55624038</p>

            <p className="footer-link">
              {" "}
              <a
                href={"mailto: info@cevicheria-berlin.com"}
                target="_blank"
                rel="noreferrer"
              >
                info@cevicheria-berlin.com{" "}
              </a>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center footer-card">
        <Card.Body>
          <Card.Title>HORARIO</Card.Title>
          <hr></hr>
          <Card.Text>
            <p> De Lunes a Sábado desde las 18h</p>
            <p> Domingos Cerrado</p>
          </Card.Text>
          <div className="footer-icons">
            <div className="footer-link">
              <a
                href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "2.6rem" }}>
                  <FaMapMarkerAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="footer-link">
              <a
                href="https://www.facebook.com/CevicheriaBerlin/"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <BsFacebook />
                </IconContext.Provider>
              </a>
            </div>
            <div className="footer-link">
              <a
                href="https://www.instagram.com/cevicheria.berlin/"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "3rem" }}>
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Footer;
