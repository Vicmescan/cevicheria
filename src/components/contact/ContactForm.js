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
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Reservation");
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

      fetch('http://localhost:8080/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify( {name, mail, phone, subject, message} )
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res) {
            setConfirmation(true);
            console.log('Message sent')
            handleShow();
          } else {
            setConfirmation(false);
            console.log('Message failed')
          }
        })
        .catch(err => console.log(err));
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
            value={mail}
            type="email"
            placeholder={t("email_placeholder")}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <Form.Label>{t("telephone")}*</Form.Label>
          <Form.Control
            required
            value={phone}
            type="tel"
            placeholder={t("telephone_placeholder")}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Form.Label>{t("subject")}*</Form.Label>
          <Form.Select
            required
            value={subject}
            aria-label="select subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option value="Reservation"> {t("subject_1")} </option>
            <option value="Suggestion"> {t("subject_2")} </option>
            <option value="Other"> {t("subject_3")} </option>
          </Form.Select>
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
          type="submit"
          onClick={handleSubmit}
        >
          {t("submit")}
        </Button>
      </Form>

      {/* modal to confirm the send of the form */}
      <ConfirmationModal show={show} setShow={setShow} confirmation={confirmation} />
    </>
  );
}

export default ContactForm;