import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LetContact } from "../Letcontact";

const servicesUse = [
  {
    id: 1,
    img: "/img/web-development/react-icon.svg",
    heading: "React",
    para: "Our React developers at Writ Labs are experts who focus on creating user interfaces for web applications using the React library. Facebook, Skype, Shopify, Instagram, Uber, Netflix, and Airbnb are just a few examples of React projects.",
  },

  {
    id: 2,
    img: "/img/web-development/angular-icon.svg",
    heading: "Angular",
    para: "Angular is frequently used to construct feature-rich, scalable, and specialized single-page web applications. PayPal, Forbes, Upwork, Google, and Nike are a few companies that use the Angular framework.    ",
  },
  {
    id: 3,
    img: "/img/web-development/jquery-icon.svg",
    heading: "jQuery",
    para: "Our team of jQuery programmers works together to create an exceptional and cutting-edge Web application at a competitive price. HTML5, XHTML, CSS, and JavaScript are all languages that our JQuery engineers are very skilled in.",
  },

  {
    id: 4,
    img: "/img/web-development/express-icon.svg",
    heading: "Express",
    para: "One of the most trending frameworks for web development that allows developers to create server-side web applications and APIs easily. Our team has a strong understanding of Express.js and its core concepts, including routing and request/response handling.    ",
  },

  {
    id: 5,
    img: "/img/web-development/laravel-icon.svg",
    heading: "Laravel",
    para: " Writ Labs experts specialize in the Laravel framework. Laravel is a popular PHP web application framework that was created by Taylor Otwell in 2011 for developing web apps, helping make coding faster.     ",
  },

  {
    id: 6,
    img: "/img/web-development/nextjs-icon.svg",
    heading: "Next.js",
    para: " Get highly scalable, versatile, responsive web development solutions from our Next.js experts. It is an open-source JavaScript framework that allows developers to write server-side code.     ",
  },
];

export const WebDevelopment = () => {
  const cardOptions = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 3000,
    loop: true,
    autoplayHoverPause: true,
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
      <section className="ui-details services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>Web Development</h1>
            <p>Home-Services</p>
          </div>
        </div>
      </section>

      <div className="services-details-data">
        <div className="container">
          <section>
            <div className="row">
              <div className="col-lg-7">
                <div className="service-detail-hd-two">
                  <h4>About</h4>
                  <h2 style={{ fontSize: "62px", top: "-20px" }}>
                    Web Development
                  </h2>
                </div>
                <p>
                  Writ Labs is the top Website Development Company in Mohali,
                  and it has made a name for itself by providing high-quality
                  web design solutions and ensuring 100% client satisfaction. We
                  specialize in developing functional websites that are suitable
                  for all types of devices. We use the most up-to-date tools and
                  technologies, such as HTML5, CSS3, Photoshop, MEAN or MERN
                  Stack, and others. In addition, web development services have
                  expanded at a quicker rate than other software-related
                  vocations, and it may assist in gaining a better grip on the
                  local market.
                </p>
              </div>

              <div className="col-lg-5">
                <img src="img/web-development-about.svg" />
              </div>
            </div>
          </section>

          <section>
            <h4 className="hd text-center mb-4">
              Web Development Services We Provide
            </h4>

            <div
              className="web-service-box"
              style={{ width: "80%", margin: "auto", position: "relative" }}
            >
              <div
                className="web-service-box-data"
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  background: "#eaf0ff",
                  borderRadius: "15px",
                }}
              >
                <h3 className="text-center"> Fullstack Development </h3>
                <p className="sec-para text-center">
                  At Writ Labs, our full-stack development services include the
                  front end and back end of the website. As a Full Stack
                  development company in Mohali, we ensure that our developers
                  are always there to assist you with needed expertise,
                  identifying roles and responsibilities with associated
                  challenges.
                </p>
              </div>
              <img className="animate-arrow" src="img/arrow-animate.svg" />

              <div
                className="row d-none mt-5"
                style={{
                  width: "80%",
                  margin: "auto",
                }}
              >
                <div className="col-lg-6">
                  <div
                    className="web-service-box-data-inner"
                    style={{
                      padding: "20px",
                      border: "1px solid #ddd",
                      background: "#fff",
                      borderRadius: "15px",
                      position: "relative",
                    }}
                  >
                    <img
                      src="img/frontend-webdevelop.svg"
                      style={{ margin: "auto", display: "flex" }}
                    />
                    <h5 className="text-center mt-4">
                      {" "}
                      Front-end development{" "}
                    </h5>
                    <p className="sec-para text-center">
                      It is also called the client-side framework and the
                      user-side framework that focuses on the user-facing
                      elements of a web application. Front-end frameworks
                      include React, Angular, and jQuery.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="web-service-box-data-inner"
                    style={{
                      padding: "20px",
                      border: "1px solid #ddd",
                      background: "#fff",
                      borderRadius: "15px",
                      position: "relative",
                    }}
                  >
                    <img
                      src="img/backend-webdevelop.svg"
                      style={{ margin: "auto", display: "flex" }}
                    />
                    <h5 className="text-center mt-4"> Back-end development </h5>
                    <p className="sec-para text-center">
                      It is also called a server-side framework and focuses on
                      handling requests, managing databases, and processing
                      data. The back-end framework includes Express, Laravel,
                      and NextJS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="hd text-center">Work Methodology of Writ Labs</h4>
            <p
              style={{
                fontSize: "18px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Writ Labs is dedicated to providing an innovative and
              comprehensive variety of Web Development services under one roof.
              As a firm, Writ Labs promises to assist its clients all around the
              world by focusing on the proper customer segment. So far,
              thousands of projects have been successfully turned over to
              clients by using the following approach:
            </p>
            {/* <p className="text-center sec-para">
              So far, thousands of projects have been successfully turned over
              to clients by using the following approach:
            </p> */}

            <ul
              style={{ listStyle: "none", paddingLeft: 0 }}
              className="work-methodology"
            >
              {" "}
              <li>
                {" "}
                <img style={{ width: "40px" }} src="img/listing-bullet.svg" />
                <p>
                  {" "}
                  We look at your company, goods, and services to get a clear
                  picture of your brand and provide you with an estimate.{" "}
                </p>
              </li>
              <li>
                {" "}
                <img style={{ width: "40px" }} src="img/listing-bullet.svg" />
                <p>
                  {" "}
                  We build designs with a futuristic perspective in mind,
                  concentrating on the target demographic and stressing the
                  greatest possible representation of your business.{" "}
                </p>
              </li>
              <li>
                {" "}
                <img style={{ width: "40px" }} src="img/listing-bullet.svg" />
                <p>
                  {" "}
                  To turn the accepted drawings into a functioning model, our
                  professional developers use the Scrum technique. This level
                  involves both frontend and backend development.{" "}
                </p>
              </li>
              <li>
                {" "}
                <img style={{ width: "40px" }} src="img/listing-bullet.svg" />
                <p>
                  {" "}
                  A multitude of tests, including functionality tests,
                  compatibility tests, performance tests, and others, are
                  conducted before the website is released to guarantee that it
                  is bug-free and operates as expected.{" "}
                </p>
              </li>
            </ul>
          </section>

          <section style={{ paddingTop: "0" }}>
            <h4 className="hd">
              Why Hire Full-Stack Developers from Writ Labs?
            </h4>

            <ul className="mt-4 why-hire">
              <li>
                <p>
                  <span>
                    <b> Fast Delivery: </b>
                  </span>{" "}
                  The number of individuals needed to build a website or web app
                  is decreased when a full-stack web developer is hired,
                  resulting in a quicker turnaround.
                </p>
              </li>

              <li>
                <p>
                  <span>
                    <b> Versatile: </b>
                  </span>{" "}
                  In addition to working with backend technologies like PHP and
                  Node.js, our full-stack engineers can also deal with front-end
                  technologies like HTML and CSS. They are experts in online and
                  mobile app development due to their extensive database and
                  server management experience.
                </p>
              </li>

              <li>
                <p>
                  <span>
                    <b> Facilitate Time and Cost Saving: </b>
                  </span>{" "}
                  Professionals from Writ Labs help reduce time and costs while
                  enhancing the functionality of websites and web apps.
                </p>
              </li>

              <li>
                <p>
                  <span>
                    <b> Flexibility and Adaptability: </b>
                  </span>{" "}
                  At Writ Labs, we have a professional team of developers who
                  are remarkably adaptable to the needs of your evolving
                  projects.
                </p>
              </li>

              <li>
                <p>
                  <span>
                    <b> Fast Delivery: </b>
                  </span>{" "}
                  Hiring a full-stack web developer reduces the number of people
                  required to design a website or web app, which helps deliver
                  work more fast. Our web developers at Writ Labs are good
                  orators and can efficiently communicate with engineers in
                  larger teams, drastically reducing the time and expense which
                  shortens the time-to-market for an app.{" "}
                </p>
              </li>
            </ul>
          </section>

          <section className="technologies-use">
            <h4 className="hd text-center mb-3">Technologies We Use</h4>
            <OwlCarousel className="card-carousel" {...cardOptions}>
              {servicesUse.map((curElem) => {
                const { id, img, heading, para } = curElem;
                return (
                  <div className="solution-block-two item" key={id}>
                    <div className="block-inner">
                      <div className="lower-box">
                        <div className="icon-box">
                          <img src={img} />
                        </div>
                        {/* <div className="box"></div> */}
                      </div>
                      <div className="inner-box">
                        <div className="color-layer-one"></div>
                        <div className="color-layer-two"></div>
                        <div className="side-icon flaticon-campaign"></div>
                        <h3>{heading}</h3>
                        <div className="text">
                          {" "}
                          <p>{para}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </section>
        </div>
      </div>

      <LetContact />
    </>
  );
};
