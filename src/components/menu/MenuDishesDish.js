import React from "react";
import { Row, Col } from "react-bootstrap";

function Dish({ title, price }) {
  return (
    <>
      <Row className="dish">
        <Col xs={10} md={10}>
          {title}
        </Col>
        <Col className="price" xs={2} md={2}>
          {price}€
        </Col>
      </Row>
    </>
  );
}

export default Dish;
