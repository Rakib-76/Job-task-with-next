import Image from "next/image";
import Banner from "./Components/Banner";
// import Servicespage from "./services/page";
// import AboutSection from "./about/page";
import InfoAndPartners from "./Components/InfoAndPartners";
import OverlayCards from "./Components/OverlayCards";
import ProcessSection from "./Components/ProcessSection";
import FeatureGrid from "./Components/FeatureGrid";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";



export default function Home() {
  return (
    <section className="bg-[#ffffff] relative">
      <Banner></Banner>
      <InfoAndPartners/>
      <OverlayCards/>
      {/* <Servicespage></Servicespage> */}
      {/* <AboutSection></AboutSection>s */}

      <ProcessSection/>
    <FeatureGrid/>
   <ProductSection/>
   <Footer/>
  
    </section>
  );
}
