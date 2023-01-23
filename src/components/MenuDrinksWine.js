import Modal from "react-bootstrap/Modal";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="modal-dish-pic"
          src={props.image}
          alt={`${props.title}`}
        ></img>
        {props.description}
      </Modal.Body>
      <Modal.Footer>0.1cl {props.price[0]}€, 0.2cl {props.price[1]}€, Botella {props.price[2]}€ </Modal.Footer>
    </Modal>
  );
}

function MenuDrinksWine({ title, image, description, price }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container className="dish" onClick={() => setModalShow(true)}>
        <Row>
          <Col xs={12} md={8}>
            {title}
          </Col>
          <Col xs={3} md={2}>
            0.1cl
          </Col>
          <Col xs={3} md={2}>
            {price[0]}€
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}></Col>
          <Col xs={3} md={2}>
            0.2cl
          </Col>
          <Col xs={3} md={2}>
            {price[1]}€
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            Botella
          </Col>
          <Col xs={3} md={2}>
            0.75cl
          </Col>
          <Col xs={3} md={2}>
            {price[2]}€
          </Col>
        </Row>
      </Container>
      <hr></hr>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        image={image}
        description={description}
        price={price}
      />
    </>
  );
}

export default MenuDrinksWine;
