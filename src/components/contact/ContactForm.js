import React from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Zoom } from "react-awesome-reveal";

function ContactForm() {
  // translation
  const { t } = useTranslation();

  return (
    <>
      <Zoom  triggerOnce="true">
        <h3 className="text-center">{t("write_us")}</h3>
      </Zoom>
      <hr></hr>
      <Form
        action="https://formsubmit.co/info@cevicheria-berlin.com"
        method="POST"
      >
        <Form.Group className="mb-3">
          <Form.Label>{t("name")}*</Form.Label>
          <Form.Control
            required
            placeholder={t("name_placeholder")}
            name="name"
          />
          <Form.Label>{t("email")}*</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder={t("email_placeholder")}
            name="email"
          />
          <Form.Label>{t("telephone")}</Form.Label>
          <Form.Control
            type="tel"
            placeholder={t("telephone_placeholder")}
            name="phone"
          />
          <Form.Label>{t("message")}*</Form.Label>
          <Form.Control required as="textarea" rows={6} name="message" />
        </Form.Group>
        <Button className="about-submit" variant="outline-dark" type="submit">
          {t("submit")}
        </Button>

        <input
          type="hidden"
          name="_next"
          value="https://cevicheria-berlin.com/confirm"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </Form>
    </>
  );
}

export default ContactForm;
