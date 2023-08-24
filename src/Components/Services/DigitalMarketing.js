import { LetContact } from "../Letcontact";

export const DigitalMarketing = () => {
  return (
    <>
      <section className="digital-marketing services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>Digital Marketing</h1>
            <p>Home-Services</p>
          </div>
        </div>
      </section>

      <section className="about-itConsulting">
        <div className="services-details-data">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div class="service-detail-hd-two">
                  <h4>About</h4>
                  <h2 style={{ fontSize: "62px", top: "-20px" }}>
                    Digital Marketing
                  </h2>
                </div>
                <p>
                  Digital marketing services can help you build a strong online
                  reputation in the digital world. We at Writ Labs, a reputed
                  digital marketing company support our clients in establishing
                  an effective brand strategy that will work for your business.{" "}
                  <br /> <br />
                  Hiring a digital marketing agency is a top-notch strategy for
                  communicating with potential customers and building a solid
                  rapport with your possible client. Our team of professionals
                  will assist you in achieving your business objective. At Writ
                  Labs, our experts will finish their work on time and produce
                  superior outcomes.
                </p>
              </div>

              <div className="col-md-6">
                <img
                  className="it-consult-rt"
                  src="img/digital-marketing-icon-rt.svg"
                  alt="digital marketing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "0" }}>
        <div className="container">
          <h4 className="hd">How do we Work?</h4>
          <p>
            With a focused work approach, we help our valuable clients solve
            complex business problems with great ease. Our digital marketing
            services connect your brands with target audiences across hundreds
            of top digital platforms.
          </p>

          <ul className="mt-4 why-hire">
            <li>
              <p>
                <span>
                  <b> Analyze Project: </b>
                </span>{" "}
                First, we analyze your project's assessing goals, target
                audience, strategies, and performance metrics to optimize
                campaigns for better user engagement, conversion, and ROI.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Discover creative and innovative ideas: </b>
                </span>{" "}
                As a digital marketer adopting creativity and innovation can be
                a game-changer in capturing audience attention. Our expert will
                prepare an effective digital marketing strategy to help you
                reach your full potential.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Start Optimization: </b>
                </span>{" "}
                Optimization involves refining strategies and tactics to improve
                performance and achieve better results. In the optimization
                process we check the content according to our targeted keywords,
                also check all the URLs are SEO friendly.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Reach Target: </b>
                </span>{" "}
                We cover every possible aspect of digital marketing to achieve
                our target which is setting you up at the top position. To reach
                a target it requires a well-crafted strategy that involves
                understanding the audience's demographics, preferences and
                behaviors etc.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <h4 className="hd text-center">
            IT Consulting Services Offer by Writ Labs
          </h4>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4">
              <div className="it-services-offer-card">
                <h5>Application Development Consulting </h5>
                <p>
                  For businesses to adopt new software and apps and enhance
                  their IT systems, our IT consulting firm in Mohali
                  concentrates on delivering Application Implementation
                  services. To develop a one-of-a-kind application
                  implementation plan, our team will work with you to understand
                  your specific business requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card">
                <h5>Digital Transformation Consulting </h5>
                <p>
                  In order to keep businesses ahead in the quick-paced digital
                  world, we specialize in providing Digital Transformation
                  Consulting services. We offer a variety of services, such as
                  creating digital strategies, streamlining procedures, and
                  enhancing the client experience.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card">
                <h5>IT Strategy Consulting </h5>
                <p>
                  Our team will work with you to identify the best technologies
                  for your industry and business, develop an implementation
                  plan, and install those technologies. In order to develop a
                  customized IT strategy that supports these goals, we will
                  jointly ascertain your company's needs.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card">
                <h5>Security Consulting Services </h5>
                <p>
                  In order to offer professional advice and solutions, our
                  security consulting services are a crucial component of our IT
                  Consultation products.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card">
                <h5>Technology Consulting and Roadmapping</h5>
                <p>
                  Writ Labs provides solutions such as technology road mapping
                  and technology strategy development. The professionals
                  collaborate with you to comprehend your business requirements
                  and create a unique technology approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <LetContact />
    </>
  );
};
