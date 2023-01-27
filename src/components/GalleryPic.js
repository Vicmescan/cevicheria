import React from "react";
import { Modal, Card } from "react-bootstrap";
import "../styles/gallery.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
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
    </Modal>
  );
}

function GalleryPic({ title, image }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card bg="var(--main-background-color)" className="gallery-container-card" style={{ width: "20rem", height: "19rem" }} onClick={() => setModalShow(true)}>
        <Card.Img className="gallery-container-card-pic" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        image={image}
      />
    </>
  );
}

export default GalleryPic;
