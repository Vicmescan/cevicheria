import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Container } from "react-bootstrap";
import "../styles/about.css";

const AboutText = () => {
    return (
        <>
                    <h1 className="fst-italic">Sobre Nosotros</h1>
            <br></br>
            <p>
              <a
                className="about-link"
                href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt /> Dresdenner Straße 120, 10999 Berlin
              </a>
            </p>
            <p>
              <BsFillTelephoneFill /> 030-55624038
            </p>
            <p>
              <a
                className="about-link"
                href={"mailto: info@cevicheria-berlin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <GrMail /> info@cevicheria-berlin.com{" "}
              </a>
            </p>
            <h5>HORARIO</h5>
            <hr></hr>
            <p>Lunes a Sábados: a partir de las 18h</p>
            <p>Domingos Cerrados</p>
            <h5>SÍGUENOS</h5>
            <hr></hr>
            <Container className="d-flex justify-content-around">
              <a
                className="about-icons"
                href="https://goo.gl/maps/3xMkcCjUHRJme8ao6"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "2.6rem" }}>
                  <FaMapMarkerAlt />
                </IconContext.Provider>
              </a>
              <a
                className="about-icons"
                href="https://www.facebook.com/CevicheriaBerlin/"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <BsFacebook />
                </IconContext.Provider>
              </a>
              <a
                className="about-icons"
                href="https://www.instagram.com/cevicheria.berlin/"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ size: "3rem" }}>
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
            </Container>
        </>

    )
}

export default AboutText;