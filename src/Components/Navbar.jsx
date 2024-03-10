import React from "react";
import { Link } from "react-router-dom";
import css from "../Styles/LandingPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    navigate("/");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
            <a
              onClick={() => scrollToSection("About_Us")}
              style={{ textDecoration: "none" }}
            >
              <li>ABOUT US</li>
            </a>

            <Link to="/Portfolio" style={{ textDecoration: "none" }}>
              <li>PORTFOLIO</li>
            </Link>
            <a
              onClick={() => scrollToSection("Contact_Us")}
              style={{ textDecoration: "none" }}
            >
              <li>CONATCT US</li>
            </a>
          </ul>
        </div>
        {isSidebarOpen && (
          <div className={css.sidebar}>
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>HOME</li>
              </Link>
              <a
                onClick={() => scrollToSection("About_Us")}
                style={{ textDecoration: "none" }}
              >
                <li>ABOUT US</li>
              </a>
              <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                <li>PORTFOLIO</li>
              </Link>
              <a
                onClick={() => scrollToSection("Contact_Us")}
                style={{ textDecoration: "none" }}
              >
                <li>CONATCT US</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
