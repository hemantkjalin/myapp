import { LetContact } from "../Letcontact";

export const ItConsultant = () => {
  return (
    <>
      <section className="it-consutlant services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>IT Consulting</h1>
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
                    IT Consulting
                  </h2>
                </div>
                <p>
                  Writ Labs, a Mohali-based IT consulting firm, provides
                  advisory services that assist clients in evaluating various
                  technology strategies. With the help of our advanced IT
                  consulting services, your business stays secure and
                  profitable. A company can easily adopt new technologies and
                  business strategies and align them with their business goals
                  and objectives.
                </p>
              </div>

              <div className="col-md-6">
                <img className="it-consult-rt" src="img/it-consulting-rt.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "0" }}>
        <div className="container">
          <h4 className="hd">
            Why Choose Writ Labs as your IT Consulting Services Company?
          </h4>

          <ul className="mt-4 why-hire">
            <li>
              <p>
                <span>
                  <b> Software experts: </b>
                </span>{" "}
                We have a team of software experts who are well-versed in the
                most recent trends and technologies. They can offer you the most
                knowledgeable counsel and direction.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Customized solution: </b>
                </span>{" "}
                We offer solutions that are made specifically for each company's
                requirements. To comprehend our client's business objectives and
                difficulties, our professionals collaborate directly with them.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Proven Results: </b>
                </span>{" "}
                We have a track record of providing clients with the greatest
                outcomes. Customers that are happy with our services report that
                their IT systems have improved and become more productive.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Cost-Effective: </b>
                </span>{" "}
                As one of the best IT consulting firms in Mohali, we provide
                affordable solutions to make the most of the client's
                investment.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
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
      </section>

      <LetContact />
    </>
  );
};
