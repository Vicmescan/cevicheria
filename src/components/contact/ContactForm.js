import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmationModal from "./ConfirmationModal";

function ContactForm() {
  // translation
  const { t } = useTranslation();

  // state for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // state for modal
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleShow = () => setShow(true);

  // confirmation information is sent to the server
  const [confirmation, setConfirmation] = useState(true);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setValidated(true);

      fetch("/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res) {
            setConfirmation(true);
            console.log("Message sent");
            handleShow();
          } else {
            setConfirmation(false);
            console.log("Message failed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h4 className="text-center">{t("write_us")}</h4>
      <hr></hr>
      <Form noValidate validated={validated}>
        <Form.Group className="mb-3">
          <Form.Label>{t("name")}*</Form.Label>
          <Form.Control
            required
            value={name}
            placeholder={t("name_placeholder")}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>{t("email")}*</Form.Label>
          <Form.Control
            required
            value={email}
            type="email"
            placeholder={t("email_placeholder")}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Label>{t("telephone")}</Form.Label>
          <Form.Control
            value={phone}
            type="tel"
            placeholder={t("telephone_placeholder")}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Form.Label>{t("message")}*</Form.Label>
          <Form.Control
            required
            value={message}
            as="textarea"
            rows={3}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          className="about-submit"
          variant="outline-dark"
          onClick={handleSubmit}
        >
          {t("submit")}
        </Button>
      </Form>

      {/* modal to confirm the send of the form */}
      <ConfirmationModal
        show={show}
        setShow={setShow}
        confirmation={confirmation}
      />
    </>
  );
}

export default ContactForm;
