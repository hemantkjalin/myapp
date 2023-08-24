import { LetContact } from "../Letcontact";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProvidedServices = [
  {
    id: 1,
    img: "img/web-development/web-development-bg.png",
    icon: "img/services-provided/web.svg",
    hd: "Web Development",
    para: "Writ Labs, a trusted IT company uses the latest design and technologies to create user-friendly and responsive websites.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    img: "img/web-development/mobile-development-bg.png",
    icon: "img/services-provided/mobile.svg",
    hd: "Mobile Development",
    para: "We are highly dedicated to achieving a better customer experience. No matter what your requirements are, our app development services are designed to offer top-edge customized solutions.",
    link: "https://www.google.com",
  },
  {
    id: 3,
    img: "img/web-development/nocode-development-bg.png",
    icon: "img/services-provided/no-code.svg",
    hd: "No-code Development",
    para: "Writ Labs professionals offer customized solutions using No-code or Low-code platforms.",
    link: "https://www.google.com",
  },
  {
    id: 4,
    img: "img/tech-4.png",
    icon: "img/services-provided/it-consultant.svg",
    hd: "IT Consulting",
    para: "When you need expert assistance, our strategic IT consultants provide you with the plans, designs, and technology that are best suited for you.",
    link: "https://www.google.com",
  },
  {
    id: 5,
    img: "img/tech-5.png",
    icon: "img/services-provided/digital.svg",
    hd: "Digital Marketing",
    para: "We built effective Digital Marketing Strategies that rapidly increase your business Growth, ranking, and traffic.",
    link: "https://www.google.com",
  },
  {
    id: 6,
    img: "img/tech-6.png",
    icon: "img/services-provided/ux.svg",
    hd: "UI/UX Design",
    para: "As a multifaceted development and designing company, we craft beautiful websites that outdo business goals and inspire, engage, and deliver the best results.",
    link: "https://www.google.com",
  },
];

export const ServicesPage = () => {
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
      <section className="services-page services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>Services</h1>
            <p>Home-Services</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="hd">Provide the Best Services in This Industry</h4>
              <p>
                Services are intangible, value-added activities that a company
                provides to its customers. They are the core of what a company
                does to create value for its customers and generate revenue.
              </p>

              <div className="d-flex align-items-center mt-5">
                <div
                  style={{
                    padding: "10px",
                    background: "#eaf0ff",
                    borderRadius: "50px",
                  }}
                >
                  <img src="img/about-icon-1.png" style={{ width: "30px" }} />
                </div>
                <div className="ml-4">
                  <h5>
                    <b>Experience</b>{" "}
                  </h5>
                  <p className="mb-0">
                    Our great team of more than 1400 software experts.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-5 mb-4">
                <div
                  style={{
                    padding: "10px",
                    background: "#eaf0ff",
                    borderRadius: "50px",
                  }}
                >
                  <img src="img/about-icon-2.png" style={{ width: "30px" }} />
                </div>
                <div className="ml-4">
                  <h5>
                    {" "}
                    <b> Quick Support </b>{" "}
                  </h5>
                  <p className="mb-0">
                    We’ll help you test bold new ideas while sharing your.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img src="img/services-page-right.svg" style={{ width: "87%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="bg bg-pattern-1"></div>
        <div className="container">
          {/* <div className="sec-title light">
            <div className="row mb-3">
              <div className="col-lg-6">
                <span className="sub-title">COMPANY BENEFITS</span>
                <h2>Let’s Work Together.</h2>
              </div>
              <div className="col-lg-6">
                <div className="text">
                  Company benefits are a set of goods or services offered by the
                  employer to their employees outside of their salary.
                </div>
              </div>
            </div>
          </div> */}

          <div className="row">
            {/* <!-- Feature Block --> */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src="img/quality-services-img.png" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="title">High Quality Services</h5>
                  <div className="text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor.
                  </div>
                  {/* <div className="icon-box">
                    <img src="img/web-solutions-icon.svg" alt="web solutions" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* <!-- Feature Block --> */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src="img/skilled-developer-img.png" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="title">Skilled Developers</h5>
                  <div className="text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor.
                  </div>
                  {/* <div className="icon-box">
                    <img
                      src="img/skilled-developer-icon.svg"
                      alt="developers-icon"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* <!-- Feature Block --> */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src="img/web-solutions-img.png" alt="" />
                  </figure>
                </div>
                <div className="content-box">
                  <h5 className="title">Perfect Web Solution</h5>
                  <div className="text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor.
                  </div>
                  {/* <div className="icon-box">
                    <img
                      src="img/quality-services-icon.svg"
                      alt="quality-icon"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="heading overlay-hd">
            <h2>SERVICES</h2>
            <h4 className="hd">Services We Provide</h4>
          </div>

          <OwlCarousel className="card-carousel" {...cardOptions}>
            {ProvidedServices.map((curElem) => {
              const { id, img, icon, hd, para, link } = curElem;
              return (
                <div className="service-block-four item" key={id}>
                  <div className="inner-box">
                    {/* <div className="image-box">
                      <figure className="image">
                        <a href="page-service-details.html">
                          <img src={img} alt="web development" />
                        </a>
                      </figure>
                    </div> */}
                    <div className="content-box">
                      {/* <div className="overlay-1"> */}
                        <div className="overlay-2">
                          <img
                            className="icon"
                            src={icon}
                            alt="services icon"
                          />
                        </div>
                      {/* </div> */}
                      <h4
                        className="hd"
                        style={{ fontSize: "25px", marginTop: "30px" }}
                      >
                        {hd}
                      </h4>
                      <p className="para"> {para}</p>
                      <a href={link} className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </section>

      <LetContact />
    </>
  );
};
