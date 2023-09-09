import * as React from "react";
import { socialIcons } from "../content/socialMedia/index";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

type socialMediaIcons = {
  src: string;
  name: string;
  link: string;
};

function Root() {
  return (
    <>
      <nav className="navBar">
        <div>
          <Link to={"/"}>
            <h4>DD.</h4>
          </Link>
        </div>
        <div className="socialMediaIcons">
          {socialIcons.map((value: socialMediaIcons) => {
            return (
              <a key={value.name} href={value.link} target="_blank">
                <img
                  src={require("../content/socialMedia" + value.src)}
                  alt={value.name}
                />
              </a>
            );
          })}
        </div>
      </nav>
      <Outlet />
      <section className="footer">
        <p>Made by Dylan O'Sullivan.</p>
      </section>
    </>
  );
}

export default Root;
