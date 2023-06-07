import React from "react";
import ScrollUp from "..";
import Header from "../components/common/Header";
import ContactText from "../components/contact/ContactText";
import ContactForm from "../components/contact/ContactForm";
import { Row, Col, Container } from "react-bootstrap";
import DatenImpresumFooter from "../components/common/DatenImpresumFooter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import "../styles/contact.css";

const Contact = () => {
  ScrollUp();

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0 }}
      >
        <div className="contact">
          <div className="contact-background"></div>
          <br></br>
          <h1 className="text-decoration-underline mb-5 text-center ">
            {t("contact_title")}{" "}
          </h1>
          <br className="d-none d-md-block"></br>
          <Container fluid>
            <Row>
              <Col xl={1} className="d-none d-xl-block"></Col>
              <Col md={6} xl={5} className="ps-md-5 text-center">
                <ContactText />
              </Col>
              <Col xl={1} className="d-none d-xl-block"></Col>
              <Col md={6} xl={4} className="pe-md-4">
                <ContactForm />
              </Col>
              <Col xl={1} className="d-none d-xl-block"></Col>
            </Row>
          </Container>
          <br></br>
        </div>
        <DatenImpresumFooter />
      </motion.div>
    </>
  );
};

export default Contact;
