import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
// import {img} from "../public/img/slide-webDevelop"

export const Homepage = () => {
  // const logoOptions = {
  //   items: 6,
  //   rewind: true,
  //   autoplay: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 3,
  //     },
  //     575: {
  //       items: 3,
  //     },
  //     991: {
  //       items: 5,
  //     },
  //     1199: {
  //       items: 6,
  //     },
  //   },
  // };
  const cardOptions = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
    navText: [
      "<img src='img/icon-prev.png' />",
      "<img src='img/icon-next.png' />",
    ],
  };
  return (
    <>
      <section className="hero-sec">
        <video className="video-bg" autoPlay loop muted>
          <source src="img/hero-sec3.mp4" />
        </video>
        <div className="content-data">
          <h2>Driving HiTech Business Transformations</h2>
        </div>
      </section>

      {/* <div className="carousel-logo">
        <div className="container">
          <OwlCarousel className="logo-carousel" {...logoOptions}>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-9.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-10.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-11.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-12.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-13.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-14.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-15.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-16.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-18.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-1.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-3.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-4.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-5.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-6.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-17.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-7.png"
                alt="logo 1"
              />
            </div>
            <div className="item">
              <img
                src="	https://writlabs.com/images/partner/partner-8.png"
                alt="logo 1"
              />
            </div>
          </OwlCarousel>
        </div>
      </div> */}

      <section className="about-us">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 about-left"
              style={{ paddingRight: "40px" }}
            >
              <img src="img/about-left.png" style={{ width: "100%" }} alt="" />
            </div>

            <div
              className="col-lg-6 about-right"
              style={{ paddingLeft: "40px" }}
            >
              <div className="sec-hd">
                <h6 className="sub-hd">ABOUT US</h6>
                <h4 className="hd">
                  We deal with the Aspects of Professional IT Services
                </h4>
              </div>
              <p
                className="sec-para"
                style={{ marginBottom: "0px", marginTop: "15px" }}
              >
                At Writ Labs, we build vital capabilities to deliver digital
                outcomes. Our skilled personnel is all prepped up to develop
                captivating and eye-capturing business software solutions for
                growth.
              </p>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-6">
                  <div className="box">
                    <img src="img/about-icon-1.png" alt="" />
                    <h6>Experience</h6>
                    <p>Our great team of more than 1400 software experts.</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="box">
                    <img src="img/about-icon-2.png" alt="" />
                    <h6>Quick Support</h6>
                    <p>
                      We’ll help you test bold new ideas while sharing your.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <img
                  className="read-more"
                  src="img/read-more.png"
                  style={{ marginTop: "25px" }}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div
            className="sec-hd"
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <h6 className="sub-hd">What We Do</h6>
            <h4 className="hd">Provide the Best Services in the Industry</h4>
          </div>

          <OwlCarousel className="card-carousel" {...cardOptions}>
            <div className="item card-one">
              <div className="c-block__col c-card__outer c-block__media">
                <Link to="/web-development">
                  <div className="c-card">
                    <div className="c-card__wrap">
                      <div className="c-card__image-main-block">
                        <img
                          decoding="async"
                          className="c-card__image-perspective"
                          loading="lazy"
                          src="img\slide-web.png"
                          alt="Web Development"
                          width="285"
                          height="540"
                        />
                        <div className="c-card__image-main-container">
                          <div className="c-card__image-main-perspective">
                            <div
                              className="c-card__image-main lazy entered loaded"
                              data-ll-status="loaded"
                            ></div>
                          </div>
                          <div className="c-card__image-main-wrap">
                            <div
                              className="c-card__image-main lazy entered loaded"
                              data-ll-status="loaded"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="c-card__content">
                        <div className="c-card__description">
                          <div className="c-card__description-top">
                            <div className="c-heading -h3">
                              <h3 className="card-hd">Web Development</h3>
                            </div>
                          </div>
                          <div className="c-card__description-bottom">
                            <p className="card-para">
                              Writ Labs, a trusted IT company uses the latest
                              design and technologies to create user-friendly
                              and responsive websites.
                            </p>

                            <a
                              href="https://www.google.com"
                              className="c-btn -link -animated"
                              rel="nofollow"
                            >
                              <span>Read More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="item card-two">
              <div className="c-block__col c-card__outer c-block__media">
                <div className="c-card">
                  <div className="c-card__wrap">
                    <div className="c-card__image-main-block">
                      <img
                        decoding="async"
                        className="c-card__image-perspective"
                        loading="lazy"
                        src="img/slide-mobile.png"
                        width="285"
                        height="540"
                        alt="service-img"
                      />
                      <div className="c-card__image-main-container">
                        <div className="c-card__image-main-perspective">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                          ></div>
                        </div>
                        <div className="c-card__image-main-wrap">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="c-card__content">
                      <div className="c-card__description">
                        <div className="c-card__description-top">
                          <div className="c-heading -h3">
                            <h3 className="card-hd">Mobile App Development</h3>
                          </div>
                        </div>
                        <div className="c-card__description-bottom">
                          <p className="card-para">
                            No matter what your requirements are, our app
                            development services are designed to offer top-edge
                            customized solutions.
                          </p>

                          <a
                            href="https://www.google.com/"
                            className="c-btn -link -animated"
                            rel="nofollow"
                          >
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item card-three">
              <div className="c-block__col c-card__outer c-block__media">
                <div className="c-card">
                  <div className="c-card__wrap">
                    <div className="c-card__image-main-block">
                      <img
                        decoding="async"
                        className="c-card__image-perspective"
                        loading="lazy"
                        src="img/slide-nocode.png"
                        width="285"
                        height="540"
                        alt="service-img"
                      />
                      <div className="c-card__image-main-container">
                        <div className="c-card__image-main-perspective">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                            style={{ background: "#222324" }}
                          ></div>
                        </div>
                        <div className="c-card__image-main-wrap">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="c-card__content">
                      <div className="c-card__description">
                        <div className="c-card__description-top">
                          <div className="c-heading -h3">
                            <h3 className="card-hd">No-Code/ Low Code</h3>
                          </div>
                        </div>
                        <div className="c-card__description-bottom">
                          <p className="card-para">
                            Writ Labs professionals offer customized solutions
                            using No-code or Low-code platforms.
                          </p>

                          <a
                            href="https://www.google.com/"
                            className="c-btn -link -animated"
                            rel="nofollow"
                          >
                            <span>Read More </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item card-four">
              <div className="c-block__col c-card__outer c-block__media">
                <div className="c-card">
                  <div className="c-card__wrap">
                    <div className="c-card__image-main-block">
                      <img
                        decoding="async"
                        className="c-card__image-perspective"
                        loading="lazy"
                        src="img/slide-digital.png"
                        width="285"
                        height="540"
                        alt="service-img"
                      />
                      <div className="c-card__image-main-container">
                        <div className="c-card__image-main-perspective">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                            style={{ background: "#222324" }}
                          ></div>
                        </div>
                        <div className="c-card__image-main-wrap">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="c-card__content">
                      <div className="c-card__description">
                        <div className="c-card__description-top">
                          <div className="c-heading -h3">
                            <h3 className="card-hd">Digital Marketing</h3>
                          </div>
                        </div>
                        <div className="c-card__description-bottom">
                          <p className="card-para">
                            We built effective Digital Marketing Strategies that
                            rapidly increase your business Growth, ranking, and
                            traffic.
                          </p>

                          <a
                            href="https://www.google.com/"
                            className="c-btn -link -animated"
                            rel="nofollow"
                          >
                            <span>Read More </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item card-five">
              <div className="c-block__col c-card__outer c-block__media">
                <div className="c-card">
                  <div className="c-card__wrap">
                    <div className="c-card__image-main-block">
                      <img
                        decoding="async"
                        className="c-card__image-perspective"
                        loading="lazy"
                        src="img/slide-it-consult.png"
                        width="285"
                        height="540"
                        alt="service-img"
                      />
                      <div className="c-card__image-main-container">
                        <div className="c-card__image-main-perspective">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                            style={{ background: "#222324" }}
                          ></div>
                        </div>
                        <div className="c-card__image-main-wrap">
                          <div
                            className="c-card__image-main lazy entered loaded"
                            data-ll-status="loaded"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="c-card__content">
                      <div className="c-card__description">
                        <div className="c-card__description-top">
                          <div className="c-heading -h3">
                            <h3 className="card-hd">IT Consulting</h3>
                          </div>
                        </div>
                        <div className="c-card__description-bottom">
                          <p className="card-para">
                            When you need expert assistance, our strategic IT
                            consultants provide you with the plans, designs, and
                            technology that are best suited for you.
                          </p>

                          <a
                            href="https://www.google.com/"
                            className="c-btn -link -animated"
                            rel="nofollow"
                          >
                            <span>Read More </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item card-six">
              <div className="c-block__col c-card__outer c-block__media">
                <Link to="/ui-services">
                  <div className="c-card">
                    <div className="c-card__wrap">
                      <div className="c-card__image-main-block">
                        <img
                          decoding="async"
                          className="c-card__image-perspective"
                          loading="lazy"
                          src="img/slide-ux.png"
                          width="285"
                          height="540"
                          alt="service-img"
                        />
                        <div className="c-card__image-main-container">
                          <div className="c-card__image-main-perspective">
                            <div
                              className="c-card__image-main lazy entered loaded"
                              data-ll-status="loaded"
                              style={{ background: "#222324" }}
                            ></div>
                          </div>
                          <div className="c-card__image-main-wrap">
                            <div
                              className="c-card__image-main lazy entered loaded"
                              data-ll-status="loaded"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="c-card__content">
                        <div className="c-card__description">
                          <div className="c-card__description-top">
                            <div className="c-heading -h3">
                              <h3 className="card-hd">UI/UX Design</h3>
                            </div>
                          </div>
                          <div className="c-card__description-bottom">
                            <p className="card-para">
                              As a versatile development and design firm, we
                              create stunning websites that surpass
                              organisational objectives and encourage, involve,
                              and produce the greatest outcomes.
                            </p>

                            <Link
                              to="/ui-services"
                              className="c-btn -link -animated"
                              rel="nofollow"
                            >
                              <span>Read More </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      {/* <!-------Our Work Section--------> */}

      <section className="our-work">
        <div className="container">
          <div className="heading overlay-hd">
            <h2>OUR WORK PROCESS</h2>
            <h4 className="hd">Our Work Process</h4>
          </div>

          <div className="our-work-data">
            <div className="work work-one">
              <img src="img/work-icon1.png" alt="" />
              <h5>Research</h5>

              <div className="arrow arrow-one">
                <img src="img/work-arrow1.png" alt="" />
              </div>
            </div>

            <div className="work work-two">
              <img src="img/work-icon2.png" alt="" />
              <h5>Analyze</h5>

              <div className="arrow arrow-two">
                <img src="img/work-arrow2.png" alt="" />
              </div>
            </div>

            <div className="work work-three">
              <img src="img/work-icon3.png" alt="" />
              <h5>Design</h5>
              <div className="arrow arrow-three">
                <img src="img/work-arrow3.png" alt="" />
              </div>
            </div>

            <div className="work work-four">
              <img src="img/work-icon4.png" alt="" />
              <h5>Testing</h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-----Technologies Section-----> */}

      <section className="technologies">
        <div className="container">
          <div className="sec-hd" style={{ marginBottom: "30px" }}>
            <h4 className="hd">Technologies We Use</h4>
            <p className="sec-para">
              To deliver the best and most fully functional apps and websites,
              we use top-notch technologies. It includes:
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="card card-one">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/backend-icon.svg" alt="" />
                  <h3 className="card-hd">Backend</h3>
                  <p className="card-para">
                    The backend of a website is its server side, where data is
                    stored and organised.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card card-two">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/frontend-icon.svg" alt="" />
                  <h3 className="card-hd">Frontend</h3>
                  <p className="card-para">
                    Front end refers to the area of a website where users
                    interact directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card card-three">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/framework-icon.svg" alt="" />
                  <h3 className="card-hd">Framework</h3>
                  <p className="card-para">
                    Developing software applications may be done on a platform
                    called a framework.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card card-four">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/database-icon.svg" alt="" />
                  <h3 className="card-hd">Database</h3>
                  <p className="card-para">
                    A database is a collection of structured, electronically
                    stored, and organised data.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card card-five">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/webservers-icon.svg" alt="" />
                  <h3 className="card-hd">Web Servers</h3>
                  <p className="card-para">
                    A web server is a computer that stores, manages, and
                    transmits website files to web browsers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="card card-six">
                <img className="vector-img" src="img/tech-vector.png" alt="" />
                <img className="plus-icon" src="img/plus-icon.png" alt="" />
                <div className="card-data">
                  <img className="icon" src="img/platform-icon.svg" alt="" />
                  <h3 className="card-hd">Platform</h3>
                  <p className="card-para">
                    A platform is any hardware or software used to host an
                    application or service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------Get Touch Section------> */}

      <section className="get-touch">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="hd">Get in touch</h4>
              <p className="sec-para">
                Use our contact form for all information requests or contact us
                directly using the contact information below.
              </p>
              <p className="sec-para">
                Feel free to get in touch with us via email or phone
              </p>

              <hr />

              <div className="listing">
                <div className="listing-data" style={{ display: "flex" }}>
                  <div>
                    <img src="img/location-icon.svg" alt="" />
                  </div>
                  <div style={{ marginLeft: "15px" }}>
                    <h6>Our Office Location</h6>
                    <p style={{ marginTop: "5px" }}>
                      C-175, City Business Centre, Phase 8B, Mohali, Punjab,
                      India
                    </p>
                  </div>
                </div>

                <div
                  className="listing-data"
                  style={{ display: "flex", marginTop: "10px" }}
                >
                  <div>
                    <img src="img/phone-icon.svg" alt="" />
                  </div>
                  <div style={{ marginLeft: "15px" }}>
                    <h6>Phone (Landline)</h6>
                    <p style={{ marginTop: "5px" }}>(+91)7508243357</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form">
                <h5>Get started with a free quotation</h5>

                <form>
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea
                      className="form-control"
                      id=""
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      I accept the
                      <span style={{ color: "#0f97cb" }}>Term of Service</span>
                    </label>
                  </div>

                  <a href="#">
                    <img src="img/submit-btn.png" alt="submit" />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
