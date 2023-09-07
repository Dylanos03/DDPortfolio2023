import * as React from "react";
import { portfolioImgs } from "../../content/projectImages";
import { techIcons } from "../../content/techIcons";

type portfolioProps = {
  title: string;
  description: string;
  tech: number[];
  liveLink: string;
  gitLink: string;
  image: number;
};

function PortfolioItem({
  title,
  description,
  tech,
  liveLink,
  gitLink,
  image,
}: portfolioProps) {
  const itemImage = portfolioImgs.find((img) => img.id === image);
  console.log(itemImage);

  return (
    <>
      <div className="portfolioItem">
        <div className="portfolioImg">
          <img src={itemImage.src} alt={title} />
        </div>
        <div className="portfolioDesc">
          <h4>{title}</h4>
          <p>{description}</p>
          <div>
            {techIcons
              .filter((t) => tech.includes(t.id))
              .map((i) => (
                <img
                  key={i.name}
                  src={require("../../content/techIcons" + i.src)}
                  alt={i.name}
                />
              ))}
          </div>
          <div>
            {liveLink && <a href={liveLink}>View Live</a>}
            {gitLink && <a href={gitLink}>GitHub</a>}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;