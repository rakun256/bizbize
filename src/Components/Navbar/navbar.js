import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent"); // Set initial color

  const handleScroll = () => {
    if (window.scrollY > 750) {
      if (!scrolling) {
        setScrolling(true);
        setNavbarColor("#06032c"); // Change color when scrolling
      }
    } else {
      if (scrolling) {
        setScrolling(false);
        setNavbarColor("transparent"); // Reset to initial color
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`navbar-container ${scrolling ? "scrolling" : ""}`}
      style={{ backgroundColor: navbarColor }}
    >
      <img alt="logo" src="Images/bizbize.png" onClick={scrollToTop} />

      <div className="links">
        <Link to="next-event" smooth={true} offset={50} duration={500}>
          SIRADAKİ ETKİNLİK
        </Link>
        <Link to="description" smooth={true} offset={50} duration={500}>
          BİZ BİZE NEDİR?
        </Link>
        <Link to="prevent" smooth={true} offset={50} duration={500}>
          ETKİNLİKLERİMİZ
        </Link>
        <Link to="event-team" smooth={true} offset={50} duration={500}>
          EKİBİMİZ
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
