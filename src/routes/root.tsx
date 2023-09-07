import * as React from "react";
import { socialIcons } from "../content/socialMedia/index";
import { Outlet } from "react-router";

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
          <a href="">
            <h4>DD.</h4>
          </a>
        </div>
        <div className="socialMediaIcons">
          {socialIcons.map((value: socialMediaIcons) => {
            return (
              <a key={value.name} href={value.link}>
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
    </>
  );
}

export default Root;
