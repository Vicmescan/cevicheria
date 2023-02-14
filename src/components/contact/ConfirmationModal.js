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
