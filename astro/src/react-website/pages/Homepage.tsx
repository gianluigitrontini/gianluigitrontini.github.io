import React from "react";

import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Technologies from "../components/Homepage/Technologies";
import Services from "../components/Homepage/Services";
import Projects from "../components/Homepage/Projects/Projects";
import Contact from "../components/Homepage/Contact/Contact";
import Footer from "../components/global/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
