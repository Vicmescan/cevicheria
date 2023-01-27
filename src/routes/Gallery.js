import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";
import ScrollUp from "..";
import GalleryPic from "../components/GalleryPic";
import one from "../images/galleryImages/1.jpeg";
import two from "../images/galleryImages/2.jpeg";
import three from "../images/galleryImages/3.jpeg";
import four from "../images/galleryImages/4.jpeg";
import five from "../images/galleryImages/5.jpg";
import six from "../images/galleryImages/6.jpg";
import "../styles/gallery.css";

const Gallery = () => {
  ScrollUp();

  return (
    <>
      <Header />
      <div className="gallery-background"></div>
      <br></br>
      <Container>
        <Row className="justify-content-around">
          <GalleryPic title="Típica Foto" image={one} />
          <GalleryPic title="Típica Foto" image={two} />
          <GalleryPic title="Típica Foto" image={three} />
          <GalleryPic title="Típica Foto" image={four} />
          <GalleryPic title="Típica Foto" image={five} />
          <GalleryPic title="Típica Foto" image={six} />
          <GalleryPic title="Típica Foto" image={three} />
          <GalleryPic title="Típica Foto" image={two} />
          <GalleryPic title="Típica Foto" image={one} />
          <GalleryPic title="Típica Foto" image={six} />
          <GalleryPic title="Típica Foto" image={five} />
          <GalleryPic title="Típica Foto" image={four} />
        </Row>
      </Container>
      <br></br>
      <Footer />
    </>
  );
};

export default Gallery;
