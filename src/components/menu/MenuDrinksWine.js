import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

function MenuDrinksWine({ title, price }) {

  const { t } = useTranslation();

return (
    <>
      <Container className="dish">
        <Row>
          <Col xs={8} md={8}>
            -{title}<sup>(4)</sup>
          </Col>
          <Col xs={2} md={2}>
            0.1cl
          </Col>
          <Col className="price" xs={2} md={2}>
            {price[0]}€
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={8}></Col>
          <Col xs={2} md={2}>
            0.2cl
          </Col>
          <Col className="price" xs={2} md={2}>
            {price[1]}€
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={8}>
            {t("bottle")}
          </Col>
          <Col xs={2} md={2}>
            0.75cl
          </Col>
          <Col className="price" xs={2} md={2}>
            {price[2]}€
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </>
  );
}

export default MenuDrinksWine;
