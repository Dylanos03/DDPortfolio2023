import * as React from "react";
import { techIcons } from "../content/techIcons";

const skills = [
  "UI/UX",
  "Wire-framing",
  "User Personas",
  "Team Player",
  "Fast Learner",
  "Figma",
  "Adobe Illustrator",
];

function About() {
  return (
    <section className="About-Whole">
      <div className="About">
        <div className="About-Me">
          <h2>About me.</h2>
          <p>
            I’m Dylan, I am a UK based front-end developer. I have always had a
            passion for all things technology, I built my first computer when I
            was 13.
            <br />
            <br />
            When I started University, I didn’t know much about coding, a little
            HTML and that was it, but I discovered how much I loved coding
            websites.
            <br />
            <br />I have many self learning and real world projects to show my
            experience, see them below.
          </p>
        </div>
        <div className="About-Skills">
          <div className="About-Skills-Tech">
            <h3>My Stack.</h3>
            <div className="techIcons">
              {techIcons.map((Icon) => {
                return (
                  <img
                    key={Icon.name}
                    src={require("../content/techIcons" + Icon.src)}
                    alt={Icon.name}
                  />
                );
              })}
            </div>
          </div>
          <div className="About-Skills-Skills">
            <h3>My Skills.</h3>
            <div className="skillsList">
              {skills.map((Skills) => {
                return (
                  <div key={Skills} className="skill">
                    {Skills}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
