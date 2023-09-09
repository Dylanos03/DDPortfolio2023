import * as React from "react";
import { portfolioItemsList } from "../components/portfolio";
import PortfolioItem from "../components/subComponents/portfolioItem";

function Projects() {
  return (
    <>
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
    </>
  );
}

export default Projects;
