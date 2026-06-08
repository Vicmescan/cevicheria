import Header from "../components/common/Header";
import HomeCarousel from "../components/home/HomeCarousel";
import Footer from "../components/common/Footer";
import HomeQuote from "../components/home/HomeQuote";
import ScrollUp from "..";
import CookieConsent from "react-cookie-consent";
import { motion } from "framer-motion";

export default function Root() {
  ScrollUp();

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0 }}
      >
        <div className="snap-container">
          <div>
            <HomeCarousel />
          </div>
          <div>
            <HomeQuote />
          </div>
          <div>
            <Footer />
          </div>
        </div>
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
      </motion.div>
    </>
  );
}
