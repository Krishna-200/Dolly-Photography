import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import css from "../Styles/LandingPage.module.css";
import PortfolioImages1 from "../Images/PortfolioPage/01/index.jsx";
import PortfolioImages2 from "../Images/PortfolioPage/02/index.jsx";
import PortfolioImages3 from "../Images/PortfolioPage/03/index.jsx";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const PortfolioDetails = () => {
  const id = useParams().id;
  const allImages1 = [PortfolioImages1.portfolio1, PortfolioImages1.portfolio2];
  const allImages2 = [PortfolioImages2.portfolio1, PortfolioImages2.portfolio2];
  let imageSrc;
  let allImages;
  switch (id) {
    case "1":
      imageSrc = PortfolioImages1.portfolio1;
      allImages = allImages1;
      break;
    case "2":
      imageSrc = PortfolioImages2.portfolio1;
      allImages = allImages2;
      break;
    case "3":
      imageSrc = PortfolioImages3.portfolio1;
      break;
    default:
      imageSrc = "";
  }

  return (
    <ReactLenis root>
      <div>
        <div className={css.portfolioNavbar}>
          <Navbar />
        </div>
        <div className={css.detailsImg}>
          <img src={imageSrc} alt="" />
        </div>
        <div className={css.detailAllImages}>
          {allImages.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default PortfolioDetails;
