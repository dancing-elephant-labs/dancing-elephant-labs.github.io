import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
// import TeamPreview from "../components/TeamPreview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <TeamPreview /> */}
      <CTA />
      <Footer />
    </main>
  );
}
