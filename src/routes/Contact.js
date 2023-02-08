import React from "react";
import ScrollUp from "..";
import Header from "../components/common/Header";
import ContactText from "../components/contact/ContactText";
import ContactForm from "../components/contact/ContactForm";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/contact.css";
import DatenImpresumFooter from "../components/common/DatenImpresumFooter";
import { useTranslation } from "react-i18next";

const Contact = () => {
  ScrollUp();

  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact-background" ></div>
      <Header />
      <br className="d-none d-md-block" ></br>
      <h2 className="text-decoration-underline mb-5 text-center "> {t("contact_title")} </h2>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={6}  className="ps-md-5 text-center about">
            <ContactText />
          </Col>
          <Col md={4}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <br></br>
      <DatenImpresumFooter />
    </div>
  );
};

export default Contact;