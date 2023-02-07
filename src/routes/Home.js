import Header from "../components/common/Header";
import HomeCarousel from "../components/home/HomeCarousel";
import Footer from "../components/common/Footer";
import HomeQuote from "../components/home/HomeQuote";
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