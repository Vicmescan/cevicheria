import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {

  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h4 className="text-center">{t("write_us")}</h4>
      <hr></hr>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("name")}*</Form.Label>
          <Form.Control required placeholder={t("name_placeholder")} />
          <Form.Label>{t("email")}*</Form.Label>
          <Form.Control required type="email" placeholder={t("email_placeholder")} />
          <Form.Label>{t("telephone")}*</Form.Label>
          <Form.Control required type="tel" placeholder={t("telephone_placeholder")}/>
          <Form.Label>{t("subject")}*</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="Reservation"> {t("subject_1")} </option>
            <option value="Suggestion"> {t("subject_2")} </option>
            <option value="Other"> {t("subject_3")} </option>
          </Form.Select>
          <Form.Label>{t("message")}*</Form.Label>
        <Form.Control required as="textarea" rows={3} />
        </Form.Group>
        <Button className="about-submit" variant="outline-dark"  type="submit">
          {t("submit")}
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
