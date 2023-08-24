import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const AccordionLayout = ({ title, bodyText, isExpanded, toggleExpanded }) => {
  return (
    <div
      className="mb-3"
      style={{ borderBottom: "5px solid #075471", background: "#F6F8FF" }}
    >
      <button
        type="button"
        className={`d-flex align-items-center justify-content-between w-100 py-3 px-3 text-left mb-0`}
        onClick={toggleExpanded}
        style={{ border: "none", background: "transparent" }}
      >
        <span
          className={`font-weight-bold text-black`}
          style={{ fontSize: "20px", fontWeight: 600 }}
        >
          {title}
        </span>
        <span id="icon" aria-hidden="true">
          {isExpanded ? (
            <AiFillMinusCircle style={{ fontSize: "30px", color: "#075471" }} />
          ) : (
            <AiFillPlusCircle style={{ fontSize: "30px", color: "#075471" }} />
          )}
        </span>
      </button>
      <div
        className={`collapse ${isExpanded ? "show" : ""}`}
        style={{ transition: "all .3s ease" }}
      >
        <div className="py-2 px-3 h5">
          <p
            className="sec-para"
            style={{
              borderLeft: "4px solid #075471",
              paddingLeft: "20px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {bodyText}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutPage = () => {
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

  const [expandedItemIndex, setExpandedItemIndex] = useState(-1);

  const handleToggleExpanded = (index) => {
    setExpandedItemIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const accordionItems = [
    {
      title: "Why should we use Writ Labs over another agency?",
      bodyText:
        "Because of our vast expertise in delivering difficult app and web portal development projects, our clients choose us. We have over 12 years of experience solving a wide range of problems, including collaborating with existing development teams, and bringing systems, processes, and applications together in a seamless manner. We can assist you whether you have large ideas, difficult challenges, or simply want the best from an agency.",
    },
    {
      title: "Benefits of using Next JS",
      bodyText:
        "In most cases, we create apps that work on both iOS and Android devices. Typically, our customers want their apps to work on both mobile and desktop devices, so we use React Native and React and React as development frameworks to support both platforms rapidly.",
    },
    {
      title: "Do you build web applications also?",
      bodyText:
        "We need a web-based application to operate behind the scenes for practically every mobile app we build. Are you familiar with the login process? There is a web server running in the background sending data to the app to determine if you are authorized to log in or not.",
    },
    {
      title:
        "Throughout the development process, will you provide any support?",
      bodyText:
        "Throughout the development process, you will be allocated a professional project manager who will be your primary point of contact. Our support portal processes every request and inquiry, ensuring that you receive prompt responses and that your work is correctly prioritized. We also provide a variety of support and maintenance solutions to guarantee that we are available to respond to your demands beyond the first launch.",
    },
    {
      title: "Can I make changes once the app or website is launched?",
      bodyText:
        "We offer a few choices for making adjustments to your app or website in the future. You may either hire us to upgrade your app or website on a project-by-project basis, in which case we'll specify, estimate, schedule, and deliver a set of needs as and when you need them. Alternatively, we may use an AGILE strategy, in which we schedule a set amount of developer time each month to ensure that things are always getting better for you. Both tactics have value, and you'll probably know which is best for you after reading this.",
    },
  ];

  return (
    <>
      <section className="about-page services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>About Us</h1>
            <p>Home-Company</p>
          </div>
        </div>
      </section>

      <section className="services-details-data">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-page-about-lt">
                <img className="play-btn" src="img/play-btn.svg" />
                <img src="img/about-page-img.png" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-page-about-rt">
                <div className="service-detail-hd-two">
                  <h4>ABOUT US</h4>
                  <h2>ABOUT US</h2>
                </div>

                <h4 className="hd">
                  We deal With The Aspects Of Professional IT Services
                </h4>
                <p>
                  Engitech is the partner of choice for many of the world’s
                  leading enterprises, SMEs and technology challengers. We help
                  businesses elevate their value through custom software
                  development, product design,
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center about-box">
                      <img src="img/about-icon-1.png" />
                      <div className="ml-4">
                        <h5>
                          <b>Experience</b>
                        </h5>
                        <p style={{ marginBottom: 0 }}>
                          Our great team of more than 1400 software experts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center about-box">
                      <img src="img/about-icon-1.png" />
                      <div className="ml-4">
                        <h5>
                          <b>Quick Support</b>
                        </h5>
                        <p style={{ marginBottom: 0 }}>
                          We’ll help you test bold new ideas while sharing your.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src="img/read-more.png" className="mt-5" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-carousel">
        <div className="container">
          <OwlCarousel className="card-carousel" {...cardOptions}>
            <div className="item">
              <img src="img/about-page-carousel1.png" />
              <div className="bottom-hd">
                <h4>Web Development</h4>
              </div>
              <div className="bottom-hd1">
                <h4>Web Development</h4>
              </div>
            </div>

            <div className="item">
              <img src="img/about-page-carousel2.png" />
              <div className="bottom-hd">
                <h4>Mobile Development</h4>
              </div>
              <div className="bottom-hd1">
                <h4>Mobile Development</h4>
              </div>
            </div>

            <div className="item">
              <img src="img/about-page-carousel3.png" />
              <div className="bottom-hd">
                <h4>No-code Development</h4>
              </div>
              <div className="bottom-hd1">
                <h4>No-code Development</h4>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="solved-cases">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="text-center">
                <div className="icon-img">
                  <img src="img/award.svg" />
                </div>

                <h4 className="hd">3230+</h4>
                <p>Total Cases</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="text-center">
                <div className="icon-img">
                  <img src="img/award.svg" />
                </div>

                <h4 className="hd">3230+</h4>
                <p>Total Cases</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="text-center">
                <div className="icon-img">
                  <img src="img/award.svg" />
                </div>

                <h4 className="hd">3230+</h4>
                <p>Total Cases</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center border-0">
                <div className="icon-img">
                  <img src="img/award.svg" />
                </div>

                <h4 className="hd">3230+</h4>
                <p>Total Cases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5>FAQ's</h5>
              <h4 className="hd mb-4">Frequently Asked Questions</h4>

              <div className="faq-container">
                {accordionItems.map((item, index) => (
                  <AccordionLayout
                    key={index}
                    title={item.title}
                    bodyText={item.bodyText}
                    isExpanded={expandedItemIndex === index}
                    toggleExpanded={() => handleToggleExpanded(index)}
                  />
                ))}

                {/* <AccordionLayout
                  title="Why should we use Writ Labs over another agency?"
                  bodyText="Because of our vast expertise in delivering difficult app and web portal development projects, our clients choose us. We have over 12 years of experience solving a wide range of problems, including collaborating with existing development teams, and bringing systems, processes, and applications together in a seamless manner. We can assist you whether you have large ideas, difficult challenges, or simply want the best from an agency."
                />

                <AccordionLayout
                  title="Benefits of using Next JS"
                  bodyText="In most cases, we create apps that work on both iOS and Android devices. Typically, our customers want their apps to work on both mobile and desktop devices, so we use React Native and React and React as development frameworks to support both platforms rapidly."
                />

                <AccordionLayout
                  title="Do you build web applications also?"
                  bodyText="We need a web-based application to operate behind the scenes for practically every mobile app we build. Are you familiar with the login process? There is a web server running in the background sending data to the app to determine if you are authorized to log in or not."
                />

                <AccordionLayout
                  title="Throughout the development process, will you provide any support?"
                  bodyText="Throughout the development process, you will be allocated a professional project manager who will be your primary point of contact. Our support portal processes every request and inquiry, ensuring that you receive prompt responses and that your work is correctly prioritized. We also provide a variety of support and maintenance solutions to guarantee that we are available to respond to your demands beyond the first launch."
                />

                <AccordionLayout
                  title="Can I make changes once the app or website is launched?"
                  bodyText="We offer a few choices for making adjustments to your app or website in the future. You may either hire us to upgrade your app or website on a project-by-project basis, in which case we'll specify, estimate, schedule, and deliver a set of needs as and when you need them. Alternatively, we may use an AGILE strategy, in which we schedule a set amount of developer time each month to ensure that things are always getting better for you. Both tactics have value, and you'll probably know which is best for you after reading this."
                /> 
                
                <AccordionLayout
                  title="Which programming language and framework do you use?"
                  bodyText="With HTML, CSS, and JavaScript on the front end and JavaScript or PHP on the back end, we prefer to employ open-source languages whenever feasible. For most mobile app projects, we utilize React Native, although we will occasionally use Cordova or PhoneGap if we are on a limited budget or need to support web, Android, and iOS rapidly.We employ front-end layout frameworks like bootstrap, design, and material design for web projects, as well as front-end coding frameworks like React or Angular. We commonly employ a PHP framework like Laravel or Yii2 on the backend or JavaScript with NodeJS."
                /> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="need-help">
                <h4 className="text-center mb-4 hd text-dark">
                  Need Any Help!
                </h4>

                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="Enter your Phone number"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id=""
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="form-check d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <label
                      className="form-check-label"
                      style={{ marginTop: "6px", marginLeft: "15px" }}
                      htmlFor="defaultCheck1"
                    >
                      I accept the
                      <span style={{ color: "#0f97cb", marginLeft: "5px" }}>
                        Term of Service
                      </span>
                    </label>
                  </div>

                  <a href="#">
                    <img
                      src="img/submit-btn.png"
                      className="submit-btn"
                      alt="submit"
                    />
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
