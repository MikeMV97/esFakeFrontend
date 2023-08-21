import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/HomeHero/Hero";
import { ColumnWrapper } from "../styles/ColumnWrapper/ColumnWrapper";
import { Footer } from "../components/Footer/Footer";
import { Element } from "react-scroll";

const HomePage = () => (
  <>
    <Navbar />
    <Element name="hero">
      <Hero />
    </Element>
    <ColumnWrapper>
      {/* <Element name="bestSites">
        <HomeBestSites />
      </Element>
      <Element name="metrics">
        <HomeMetrics />
      </Element> */}
    </ColumnWrapper>
    <Footer />
  </>
);

export default HomePage;
