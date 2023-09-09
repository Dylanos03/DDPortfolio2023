import * as React from "react";
import PortfolioItem from "./subComponents/portfolioItem";
import { portfolioImgs } from "../content/projectImages";

export const portfolioItemsList = [
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
    desc: "This one page website was made for business consultancy, Umbreco. I took control of the wordpress site as there old one was very outdated and slow, I gave it a modern touch and changed hosting to make it a lot faster, deleting a lot of unused pages and plugins in the process.",
    tech: [2, 10],
    liveSite: "https://www.umbreco.co.uk",
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
          <a href="/projects">
            <div className="button-more">See all my work</div>
          </a>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
