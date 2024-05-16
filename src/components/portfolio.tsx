import PortfolioItem from "./subComponents/portfolioItem";
import { Link } from "react-router-dom";

export const portfolioItemsList = [
  {
    title: "Page Writer Pro",
    desc: "Page Writer Pro is an AI-Powered content generation tool for websites. It uses OpenAI's GPT-3 to generate content for your website. I built this project using Next.js, TailwindCSS, Prisma, tRPC, NextAuth, Stripe and the OpenAI API.",
    tech: [1, 2, 4, 6, 7, 8, 12, 14, 15],
    liveSite: "https://pagewriter.pro",
    githubLink: "",
    imgID: 5,
  },
  {
    title: "Homeys",
    desc: "Homeys is a hub for students to find other students to live with based on their interests and hobbies. This is my 3rd year final project, built with the T3 stack, it has been my biggest project so far",
    tech: [1, 2, 3, 5, 6, 7, 8, 12, 4],
    liveSite: "https://homeys-blush.vercel.app/",
    githubLink: "https://github.com/Dylanos03/homeys",
    imgID: 4,
  },
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
    desc: "This one page website was made for business consultancy, Umbreco. I took control of the wordpress site as their old one was very outdated and slow, I gave it a modern touch and changed hosting to make it a lot faster, deleting a lot of unused pages and plugins in the process.",
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

          <Link to={"/projects"} className="button-more">
            See all my work
          </Link>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
