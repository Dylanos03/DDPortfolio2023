import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/portfolio";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

export default Home;
