import Card from "react-bootstrap/Card";
import aboutPic from "../images/dresdener.jpg";

function ContactPic() {
  return (
    <Card className="border-0">
      <Card.Img src={aboutPic} alt="Dresdenerstrasse Picture" />
      <Card.Text className="ps-3 pe-2 fst-italic aboutPic-subtitle">
        Fotografien der Dresdener Straße, Kinder vom 23. März 1980. Júrgen
        Henschel, FHXB Friedrichshain-Kreuzberg Museum
      </Card.Text>
    </Card>
  );
}

export default ContactPic;
