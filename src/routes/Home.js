import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import HomeQuote from "../components/HomeQuote";
import ScrollUp from "..";

export default function Root() {

  ScrollUp();

    return (
      <>
        <Header />
        <HomeCarousel />
        <HomeQuote />
        <Footer />
      </>
    );
  }