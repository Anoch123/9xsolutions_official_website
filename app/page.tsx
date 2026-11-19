import Footer from "@/components/footer";
import Header from "@/components/Header";
import FinalCTA from "@/components/home-components/FinalCTA";
import HowWeWork from "@/components/home-components/HowWeWork";
import Industries from "@/components/home-components/Industries";
import PartnerSpotlight from "@/components/home-components/partner-spotlight.tsx";
import Clients from "@/components/home-components/Clients";
import WhyUs from "@/components/home-components/WhyUs";
import Services from "@/components/services-components/services";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/"];

export default function Home() {
  return (
    <section className="relative">
      <Header />
      <Services />
      {/* <SelectedWork /> */}
      <WhyUs />
      <HowWeWork />
      {/* <Industries /> */}
      <PartnerSpotlight />
      <Clients />
      <FinalCTA />
      <Footer />
    </section>
  );
}