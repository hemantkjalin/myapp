import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'; 

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link to ="/" className="navbar-brand">
            <img src="img/footer-logo.png" alt="logo" style={{width: "160px"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/about" className="dropdown-item">
                    About
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Team
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/web-development" className="dropdown-item">
                    Web Development
                  </Link>
                  <Link to="/digital-marketing" className="dropdown-item">
                    Digital Marketing
                  </Link>
                  <Link to="/it-consulting" className="dropdown-item">
                    IT Consulting
                  </Link>
                  <Link to="/ui-services" className="dropdown-item">
                    UI/UX Design
                  </Link>
                  <Link to="/no-code" className="dropdown-item">
                    No Code Platform
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/about" className="dropdown-item">
                    About
                  </Link>
                  <Link to="/industries" className="dropdown-item">
                    Industries
                  </Link>
                  <Link to="/services" className="dropdown-item">
                    Services
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Team
                  </Link>
                  
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <span className="header-contact">
              <FontAwesomeIcon icon={faMessage} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
