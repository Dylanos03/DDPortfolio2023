import * as React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="Hero">
        <h3>Hi, I'm Dylan</h3>
        <h1>A Front-End Developer</h1>
        <Link className="viewButton" to={"projects"}>
          View my work
        </Link>
      </div>
    </>
  );
}

export default Hero;
