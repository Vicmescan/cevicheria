import Header from "../components/common/Header";
import HomeCarousel from "../components/home/HomeCarousel";
import Footer from "../components/common/Footer";
import HomeQuote from "../components/home/HomeQuote";
import ScrollUp from "..";
import CookieConsent from "react-cookie-consent";

export default function Root() {
  ScrollUp();

  return (
    <>
      <Header />
      <HomeCarousel />
      <HomeQuote />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="¡Chevere!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu
        erhöhen.
      </CookieConsent>
    </>
  );
}
