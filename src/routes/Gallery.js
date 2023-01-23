import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Stack } from "react-bootstrap";
import GalleryPic from "../components/GalleryPic";
import one from "../images/galleryImages/1.jpeg";
import two from "../images/galleryImages/2.jpeg";
import three from "../images/galleryImages/3.jpeg";
import four from "../images/galleryImages/4.jpeg";
import five from "../images/galleryImages/5.jpg";
import six from "../images/galleryImages/6.jpg";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="gallery-background"></div>
      <Container>
        <Stack className="gallery-container" gap={5}>
          <Row>
            <Col>
              <GalleryPic title="Típica Foto" image={one} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={two} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={three} />
            </Col>
          </Row>
          <Row>
            <Col>
              <GalleryPic title="Típica Foto" image={four} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={five} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={six} />
            </Col>
          </Row>
          <Row>
            <Col>
              <GalleryPic title="Típica Foto" image={three} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={two} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={one} />
            </Col>
          </Row>
          <Row>
            <Col>
              <GalleryPic title="Típica Foto" image={six} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={five} />
            </Col>
            <Col>
              <GalleryPic title="Típica Foto" image={four} />
            </Col>
          </Row>
        </Stack>
      </Container>
      <br></br>
      <Footer />
    </>
  );
};

export default Gallery;
