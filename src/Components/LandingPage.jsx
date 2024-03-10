import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingImg from "../Images/001.jpg";
import css from "../Styles/LandingPage.module.css";
import about_img_1 from "../Images/002.jpeg";
import about_img_2 from "../Images/003.jpeg";
import why_us_img_1 from "../Images/004.jpeg";
import why_us_img_2 from "../Images/005.jpeg";
import {
  FaCameraRetro,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { GiLinkedRings } from "react-icons/gi";
import images from "../Images/Services/index.jsx";
import portfolioImages from "../Images/Portfolio/index.jsx";
import carouselImages from "../Images/Carousel/index.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const refs = [textRef1, textRef2];

  useEffect(() => {
    if (!refs || !refs.length) return;

    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: { trigger: el },
        }
      );
    });
  });

  const serviceTextRef1 = useRef(null);
  const serviceTextRef2 = useRef(null);
  const serviceTextRef3 = useRef(null);
  const serviceTextRef4 = useRef(null);
  const serviceTextRef5 = useRef(null);
  const serviceTextRef6 = useRef(null);
  const serviceTextRef7 = useRef(null);
  const serviceTextRef8 = useRef(null);
  const serviceRefs = [
    serviceTextRef1,
    serviceTextRef2,
    serviceTextRef3,
    serviceTextRef4,
    serviceTextRef5,
    serviceTextRef6,
    serviceTextRef7,
    serviceTextRef8,
  ];

  useEffect(() => {
    if (!serviceRefs || !serviceRefs.length) return;

    serviceRefs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          scrollTrigger: { trigger: el },
        }
      );
    });
  });

  const serviceImgRef1 = useRef(null);
  const serviceImgRef2 = useRef(null);
  const serviceImgRef3 = useRef(null);
  const serviceImgRef4 = useRef(null);
  const serviceImgRef5 = useRef(null);
  const serviceImgRef6 = useRef(null);
  const serviceImgRef7 = useRef(null);
  const serviceImgRef8 = useRef(null);
  const serviceImgRef = [
    serviceImgRef1,
    serviceImgRef2,
    serviceImgRef3,
    serviceImgRef4,
    serviceImgRef5,
    serviceImgRef6,
    serviceImgRef7,
    serviceImgRef8,
  ];
  useEffect(() => {
    if (!serviceImgRef || !serviceImgRef.length) return;

    serviceImgRef.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          scrollTrigger: { trigger: el },
        }
      );
    });
  });

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
          delay: 0.2,
          duration: 1,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const data = [
    {
      name: "krishna",
      img: carouselImages.carousel1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      name: "krishna",
      img: carouselImages.carousel2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      name: "krishna",
      img: carouselImages.carousel3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      name: "krishna",
      img: carouselImages.carousel4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      name: "krishna",
      img: carouselImages.carousel5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
  ];
  const navigate = useNavigate();
  const handlePortfolioClick = (number) => {
    navigate("/PortfolioDetails/" + number);
  };

  return (
    <ReactLenis root>
      <div className={css.mainComponent}>
        <div className={css.LandingImg}>
          <div className={css.blackScreen}></div>
        </div>
        <Navbar />
        <div className={css.mainText}>
          <h1>Wedding </h1>
          <h2>PhotoGraphy</h2>
          <h3>Make A wonderful story for your wedding</h3>
        </div>
        <div id="About_Us" className={css.about}>
          <div ref={textRef1} className={css.about_text}>
            <h3>About Us</h3>
            <h2> Hello, we are Dolly Photography</h2>
            <p>
              Welcome to our wedding photography website! We are thrilled that
              you have chosen us to capture the most special day of your life.
              Our team of experienced and passionate photographers is dedicated
              to providing you.
            </p>
            <h1>by Dolly Photography</h1>
          </div>
          <div className={css.about_img}>
            <div className={css.about_img_1}>
              <img src={about_img_1} alt="" />
            </div>
            <div className={css.about_img_2}>
              <img src={about_img_2} alt="" />
            </div>
          </div>
        </div>
        <div className={css.whyUs}>
          <div className={css.whyUs_img}>
            <div className={css.whyUs_img_1}>
              <img src={why_us_img_1} alt="" />
            </div>
            <div className={css.whyUs_img_2}>
              <img src={why_us_img_2} alt="" />
            </div>
          </div>
          <div ref={textRef2} className={css.whyUs_text}>
            <h3>Why Choose Us</h3>
            <h2>Create Memories:</h2>
            <h2>Wedding Photography.</h2>
            <div className={css.whyUs_features}>
              <div className={css.whyUs_camera}>
                <FaCameraRetro />
                <hr />
                <h6>HIGH-QUALITY EQUIPMENT</h6>
                <p>
                  Crafting Perfection: Unveiling Our Commitment with
                  High-Quality Equipment.
                </p>
              </div>
              <div className={css.whyUs_ring}>
                <GiLinkedRings />
                <hr />
                <h6>CREATIVITY AND ARTISTRY</h6>
                <p>
                  Fusing Creativity with Artistry: Redefining Boundaries and
                  Setting New Standards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.parallax}></div>
        <div className={css.services}>
          <h1>Our Services</h1>
          <div className={css.serviceImages}>
            <div className={css.services_row_1}>
              <div className={css.vertical}>
                <span>
                  <img ref={serviceImgRef1} src={images.services1} alt="" />
                </span>
                <div ref={serviceTextRef1}>
                  <div>
                    <h2>Classic Wedding</h2>
                    <h3>DOlly & Molly</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className={css.horizontal}>
                <img ref={serviceImgRef2} src={images.services5} alt="" />
                <div ref={serviceTextRef2}>
                  <div>
                    <h3>DOlly & Molly</h3>
                    <h2>Classic Wedding</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className={css.services_row_2}>
              <div className={css.horizontal}>
                <img ref={serviceImgRef3} src={images.services2} alt="" />
                <div ref={serviceTextRef3}>
                  <div>
                    <h3>DOlly & Molly</h3>
                    <h2>Classic Wedding</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className={css.vertical}>
                <img ref={serviceImgRef4} src={images.services6} alt="" />
                <div ref={serviceTextRef4}>
                  <div>
                    <h2>Classic Wedding</h2>
                    <h3>DOlly & Molly</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className={css.services_row_3}>
              <div className={css.vertical}>
                <img ref={serviceImgRef5} src={images.services3} alt="" />
                <div ref={serviceTextRef5}>
                  <div>
                    <h3>DOlly & Molly</h3>
                    <h2>Classic Wedding</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className={css.horizontal}>
                <img ref={serviceImgRef6} src={images.services7} alt="" />
                <div ref={serviceTextRef6}>
                  <div>
                    <h3>DOlly & Molly</h3>
                    <h2>Classic Wedding</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className={css.services_row_4}>
              <div className={css.horizontal}>
                <img ref={serviceImgRef7} src={images.services4} alt="" />
                <div ref={serviceTextRef7}>
                  <div>
                    <h3>DOlly & Molly</h3>
                    <h2>Classic Wedding</h2>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className={css.vertical}>
                <img ref={serviceImgRef8} src={images.services8} alt="" />
                <div ref={serviceTextRef8}>
                  <div>
                    <h2>Classic Wedding</h2>
                    <h3>DOlly & Molly</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.portfolio}>
          <h2 ref={addtoRefs}>PORTFOLIO CASES</h2>
          <h1 ref={addtoRefs}>Your Wedding Day Captured In Style.</h1>
          <div className={css.portfolio_rows}>
            <div ref={addtoRefs} className={css.portfolio_row_1}>
              <div
                onClick={() => handlePortfolioClick(1)}
                className={css.row_1_img_1}
              >
                <img src={portfolioImages.portfolio1} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(4)}
                className={css.row_1_img_2}
              >
                <img src={portfolioImages.portfolio4} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(7)}
                className={css.row_1_img_3}
              >
                <img src={portfolioImages.portfolio7} alt="" />
              </div>
            </div>
            <div ref={addtoRefs} className={css.portfolio_row_2}>
              <div
                onClick={() => handlePortfolioClick(2)}
                className={css.row_2_img_1}
              >
                <img src={portfolioImages.portfolio2} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(5)}
                className={css.row_2_img_2}
              >
                <img src={portfolioImages.portfolio5} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(8)}
                className={css.row_2_img_3}
              >
                <img src={portfolioImages.portfolio8} alt="" />
              </div>
            </div>
            <div ref={addtoRefs} className={css.portfolio_row_1}>
              <div
                onClick={() => handlePortfolioClick(3)}
                className={css.row_1_img_1}
              >
                <img src={portfolioImages.portfolio3} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(6)}
                className={css.row_1_img_2}
              >
                <img src={portfolioImages.portfolio6} alt="" />
              </div>
              <div
                onClick={() => handlePortfolioClick(9)}
                className={css.row_1_img_3}
              >
                <img src={portfolioImages.portfolio9} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${css.parallax} ${css.parallax2}`}></div>
        <div ref={addtoRefs} className={css.review}>
          <h1>Some Words About Us</h1>
          <div className={css.reviewCards}>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div className={css.reviewCard} key={index}>
                  <div>
                    <img src={d.img} alt="" />
                  </div>
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div id="Contact_Us" className={css.contact}>
          <div ref={addtoRefs} className={css.contactMap}>
            <iframe
              width="720"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Krishna%20Bazar,%20Narsipatnam+(Dolly%20Photoraphy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
            <div className={css.contactInfo}>
              <div>
                <h2>Phone</h2>
                <span>
                  <FaPhoneAlt />
                  <h3>234567890</h3>
                </span>
              </div>
              <div>
                <h2>Email</h2>
                <span>
                  <FaMailBulk />
                  <h3>dollyphotography@gmail.com</h3>
                </span>
              </div>
            </div>
          </div>
          <div ref={addtoRefs} className={css.contactText}>
            <h4>Contact Us</h4>
            <h2>GET IN TOUCH WITH US</h2>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" />
              <label htmlFor=""> Phone Number</label>
              <input type="number" placeholder="number" />
              <label htmlFor=""> Messsage</label>
              <textarea name="" id="" cols="10" rows="5"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default LandingPage;
