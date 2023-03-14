import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Impressum = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="footer-link" onClick={handleShow}>
        Impressum
      </p>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Impressum</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Peter Rommel
            <br />
            Cevicheria
            <br />
            Dresdener Stra&szlig;e 120
            <br />
            10999 Berlin
            <br />
            Steuernummer: 11 14 496 01852 56 2244
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 30 55624038
            <br />
            E-Mail: info@cevicheria-berlin.com
          </p>

          {/* <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE999999999
          </p> */}

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <hr></hr>
          <p>
            Website erstellt von Víctor Mestre Canto,{" "}
            <a
              href="https://github.com/Vicmescan"
              target="_blank"
              rel="noreferrer"
            >
              Vicmescan{" "}
            </a>
          </p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Impressum;
