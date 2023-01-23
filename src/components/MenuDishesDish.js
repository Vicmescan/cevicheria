import Modal from "react-bootstrap/Modal";
import React from "react";

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
      <Modal.Footer>
        {props.price}€
      </Modal.Footer>
    </Modal>
  );
}

function Dish({ title, image, description, price }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <p className="dish" onClick={() => setModalShow(true)}>
        {title} {price}€
      </p>

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

export default Dish;
