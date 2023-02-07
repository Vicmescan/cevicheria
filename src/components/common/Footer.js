import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Row, Col, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import DatenImpresumFooter from "./DatenImpresumFooter";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar className="footer">
        <Row className="row-container d-flex justify-content-around text-center">
          <Col sm lg="3">
            <h4>{t("contact")}</h4>
            <hr></hr>
            <p className="footer-link">
              <a
                href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt /> Dresdener Straße 120, 10999 Berlin{" "}
              </a>
            </p>
            <p className="footer-link">
              <a href="tel:03055624038">
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
            <h4>{t("timetable")}</h4>
            <hr></hr>
            <p>{t("from_monday")}</p>
            <p>{t("sunday")}</p>
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
        <hr></hr>
      </Navbar>
      <DatenImpresumFooter />
    </>
  );
}

export default Footer;
