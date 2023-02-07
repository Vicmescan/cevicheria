import React from "react";
import ScrollUp from "..";
import Header from "../components/common/Header";
import ContactText from "../components/contact/ContactText";
import ContactPic from "../components/contact/ContactPic";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/contact.css";
import DatenImpresumFooter from "../components/common/DatenImpresumFooter";

const Contact = () => {
  ScrollUp();

  return (
    <>
      <Header />
      <br className="d-none d-md-block" ></br>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={6}  className="ps-md-5 text-center about">
            <ContactText />
          </Col>
          <Col md={6}>
            <ContactPic />
          </Col>
        </Row>
      </Container>
      <br></br>
      <DatenImpresumFooter />
    </>
  );
};

export default Contact;