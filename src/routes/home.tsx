import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/portfolio";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
