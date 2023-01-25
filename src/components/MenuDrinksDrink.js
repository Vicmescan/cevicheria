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
      </Modal.Body>
      <Modal.Footer>
        {props.size} {props.price}€
      </Modal.Footer>
    </Modal>
  );
}

function MenuDrinksDrink({ title, image, size, price, additives }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container className="dish" onClick={() => setModalShow(true)}>
        <Row>
          <Col xs={8} md={8}>
            {title} {additives ? <sup>({additives})</sup> : null}
          </Col>
          <Col xs={2} md={2}>
            {size}
          </Col>
          <Col xs={2} md={2}>
            {price}€
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        image={image}
        size={size}
        price={price}
      />
    </>
  );
}

export default MenuDrinksDrink;
