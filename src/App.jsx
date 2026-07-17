import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";
import SpiderManMask from "./sections/SpiderManMask";

const App = () => {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <div className="opacity-100 transition-opacity duration-500">
        <Navbar />
        <div className="sticky top-0 h-screen w-full z-0">
          <SpiderManMask />
        </div>
        <div className="relative z-10 bg-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col">
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <Certifications />
          <ContactSummary />
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
