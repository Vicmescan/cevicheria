import React from "react";
import ScrollUp from "..";
import Header from "../components/Header";
import AboutText from "../components/AboutText";
import AboutPic from "../components/AboutPic";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/about.css";

const About = () => {
  ScrollUp();

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={6} className="ps-5 text-center about">
            <AboutText />
          </Col>
          <Col md={6}>
            <AboutPic />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;