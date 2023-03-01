import React from 'react'
import Datenshutz from "./Datenshutz";
import Impressum from "./Impressum";
import { Navbar, Row, Col } from "react-bootstrap";

const DatenImpresumFooter = () => {
  return (
    <Navbar className="subFooter footer row-container d-flex justify-content-around text-center">
    <Row  className="row-container d-flex justify-content-around text-center">
      <Col className="d-sm-flex justify-content-around text-center" >
        <Datenshutz />
        <Impressum />
      </Col >
      <Col>
        <i>Created by Vicmescan</i>
      </Col>
    </Row>
  </Navbar>
  )
}

export default DatenImpresumFooter