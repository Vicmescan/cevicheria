import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function MenuDrinksDrink({ title, size, price, additives }) {
  return (
    <>
      <Container className="dish">
        <Row>
          <Col xs={8} md={8}>
            -{title} {additives ? <sup>({additives})</sup> : null}
          </Col>
          <Col xs={2} md={2}>
            {size}
          </Col>
          <Col xs={2} md={2}>
            {price}€
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MenuDrinksDrink;
