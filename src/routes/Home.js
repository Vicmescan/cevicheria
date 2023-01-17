import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import HomeQuote from "../components/HomeQuote";

export default function Root() {
    return (
      <>
        <Header />
        <HomeCarousel />
        <HomeQuote />
        <Footer />
      </>
    );
  }