import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ConfirmationModal = ({ show, setShow, confirmation }) => {
 
    const { t } = useTranslation();

  // Close modal and reload page if message has been sent
  const handleClose = () => {
    setShow(false);
    if (confirmation === true) {
      window.location.reload();
    }
  };

//   A ver, Vic, tengo que traducir el mensaje del modal y también ver si me interesa enviar un modal cuando no hay res del server,
// también tema de icono e imagenes, que dan error en la consola.
// tambien el nodemailer.
// que por culo da el tabnine, que no me deja escribir nada, y no se como desactivarlo.
// eso lo ha escrito él, no yo.

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ t("confirmation_Message") }</Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
