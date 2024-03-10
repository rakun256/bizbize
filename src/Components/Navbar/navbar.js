import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScrollAndResize = () => {
    // Dinamik olarak viewport genişliğini güncelle
    setViewportWidth(window.innerWidth);

    // Navbar rengini ayarla
    if (viewportWidth > 750) {
      // Geniş ekran için şeffaf/navbar rengi ayarlamalarını yapabilirsiniz
      if (window.scrollY > 800) {
        setNavbarColor("#06032c");
      } else {
        setNavbarColor("transparent");
      }
    } else {
      // Daha küçük ekranlar için farklı ayarlamalar yapabilirsiniz
      if (window.scrollY > 750) {
        setNavbarColor("#06032c");
      } else {
        setNavbarColor("transparent");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, [viewportWidth]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar-container" style={{ backgroundColor: navbarColor }}>
      <img alt="logo" src="Images/bizbize.webp" onClick={scrollToTop} />

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
