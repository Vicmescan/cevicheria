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
        <Modal.Body  >
          <h3 className="text-center" >{t("confirmation_Message")}</h3>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
