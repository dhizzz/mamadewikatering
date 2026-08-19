import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import WhyUs from "./components/WhyUs";
import MenuSection from "./components/MenuSection";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import HowToOrder from "./components/HowToOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhyUs />
        <MenuSection />
        <Packages />
        <Gallery />
        <Testimonials />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
