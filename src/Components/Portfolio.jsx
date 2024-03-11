import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "../Styles/LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import portfolioImages from "../Images/PortfolioPage/Portfolio/index.jsx";
import slide_img_1 from "../Images/PortfolioPage/Swiper/002.jpeg";
import slide_img_2 from "../Images/PortfolioPage/Swiper/004.jpeg";
import slide_img_6 from "../Images/PortfolioPage/Swiper/06.jpeg";
import slide_img_3 from "../Images/PortfolioPage/Swiper/A.jpg";
import slide_img_4 from "../Images/PortfolioPage/Swiper/B.jpg";
import slide_img_5 from "../Images/PortfolioPage/Swiper/C.jpg";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import gsap from "gsap";
import { Suspense } from "react";

const Portfolio = () => {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el) => {
      gsap.fromTo(
        el,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          left: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const navigate = useNavigate();
  const handlePortfolioClick = (number) => {
    navigate("/PortfolioDetails/" + number);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    navigate("/");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ReactLenis root>
      <div className={css.mainPortfolioComponent}>
        <div className={css.portfolioNavbar}>
          <div className={css.navbar}>
            <div>
              <h2>Dolly PhotoGraphy</h2>
            </div>
            <div className={css.navElemets}>
              {!isSidebarOpen ? (
                <svg
                  onClick={toggleSidebar}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              ) : (
                <svg
                  onClick={closeSidebar}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              )}

              <div className={css.mainNavbar}>
                <ul>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li>HOME</li>
                  </Link>
                  {/* <a
                    onClick={() => scrollToSection("About_Us")}
                    style={{ textDecoration: "none" }}
                  >
                    <li>ABOUT US</li>
                  </a> */}

                  <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                    <li>PORTFOLIO</li>
                  </Link>
                  {/* <a
                    onClick={() => scrollToSection("Contact_Us")}
                    style={{ textDecoration: "none" }}
                  >
                    <li>CONATCT US</li>
                  </a> */}
                </ul>
              </div>
              {isSidebarOpen && (
                <div className={css.sidebar}>
                  <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li>HOME</li>
                    </Link>
                    {/* <a
                      onClick={() => scrollToSection("About_Us")}
                      style={{ textDecoration: "none" }}
                    >
                      <li>ABOUT US</li>
                    </a> */}
                    <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                      <li>PORTFOLIO</li>
                    </Link>
                    {/* <a
                      onClick={() => scrollToSection("Contact_Us")}
                      style={{ textDecoration: "none" }}
                    >
                      <li>CONATCT US</li>
                    </a> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_img_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_img_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_img_3} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide_img_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_img_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_img_6} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <Suspense fallback={<h1>Loading . . .</h1>}>
          <div className={css.portfolioContent}>
            <div ref={addtoRefs}>
              <h1>Our Work</h1>
            </div>
            <div ref={addtoRefs} className={css.portfolioComponents}>
              <div
                onClick={() => handlePortfolioClick(1)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio1} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(2)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio2} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(3)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio3} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(4)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio4} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(5)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio5} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(6)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio6} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(7)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio7} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>

              <div
                onClick={() => handlePortfolioClick(8)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio8} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
              <div
                onClick={() => handlePortfolioClick(9)}
                className={css.portfolioComponent}
              >
                <div>
                  <img src={portfolioImages.portfolio9} alt="" />
                </div>
                <h2>Dolly & Molly</h2>
              </div>
            </div>
          </div>
        </Suspense>
        <div>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Portfolio;
