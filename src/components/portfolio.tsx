import * as React from "react";
import PortfolioItem from "./subComponents/portfolioItem";
import { portfolioImgs } from "../content/projectImages";

const portfolioItemsList = [
  {
    title: "Spruced Up Stuff",
    desc: "This is a one-page website made for a funiture refurbishment business. My process was design on Figma, chosing forest green as my primary colour, built with React.js and TailwindCSS and hosted on Hostinger. This site is live and you can view it with the link below!",
    tech: [1, 2, 3, 5, 6, 7, 8],
    liveSite: "https://www.sprucedupstuff.co.uk",
    githubLink: "https://github.com/Dylanos03/Spruced-Up",
    imgID: 1,
  },
  {
    title: "Umbreco",
    desc: "",
    tech: [2, 10],
    liveSite: "",
    githubLink: "",
    imgID: 2,
  },
];

function Portfolio() {
  return (
    <>
      <div className="Portfolio-Whole">
        <section className="Portfolio">
          <h2>My Previous Work</h2>
          {portfolioItemsList.map((item) => {
            return (
              <PortfolioItem
                key={item.title}
                title={item.title}
                description={item.desc}
                tech={item.tech}
                liveLink={item.liveSite}
                gitLink={item.githubLink}
                image={item.imgID}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Portfolio;
