import Image from "next/image";
import Banner from "./Components/Banner";
import Servicespage from "./services/page";
import AboutSection from "./about/page";

export default function Home() {
  return (
    <section className="bg-[#010313]">
      <Banner></Banner>
      <Servicespage></Servicespage>
      <AboutSection></AboutSection>
    </section>
  );
}
