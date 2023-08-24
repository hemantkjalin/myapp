import { LetContact } from "../Letcontact";

export const NoCode = () => {
  return (
    <>
      <section className="no-code services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>No-Code Platform</h1>
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
                    No-Code Platform
                  </h2>
                </div>
                <p>
                  No-code development platforms allow for better flexibility and
                  collaboration between technical and non-technical teams while
                  enabling enterprises to create custom software more quickly.
                  These drag-and-drop features and user-friendly interfaces make
                  it simple for you to visualize the implementation.
                </p>
              </div>

              <div className="col-md-6">
                <img className="it-consult-rt" src="img/no-code-img-rt.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "0" }}>
        <div className="container">
          <h4 className="hd">Why Choose us for No-Code Development?</h4>
          <p>
            Finding the top no-code developer in the market is challenging in
            the digital world because this platform is growing with each passing
            day. At Writ Labs, we provide dependable and effective no-code
            services to help organizations rapidly and easily construct unique
            web applications. Due to the flexibility and adaptability of our
            no-code app development services, we can offer solutions that are
            especially suited to the requirements and demands of your company.
          </p>

          <ul className="mt-4 why-hire">
            <li>
              <p>
                <span>
                  <b> Expertise in no code development services: </b>
                </span>{" "}
                With our expertise in no-code app development solutions and
                significant experience, we can assist you in bringing your ideas
                to life using traditional development approaches.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Leveraging Latest Tools: </b>
                </span>{" "}
                In order to design high-quality web applications without writing
                any code, we specialize in developing no code solutions and make
                use of the most recent tools.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Customizable solutions: </b>
                </span>{" "}
                We offer a wide range of services that don't require any coding
                that can be modified to suit your needs.
              </p>
            </li>

            <li>
              <p>
                <span>
                  <b> Cost-effective solutions: </b>
                </span>{" "}
                No code development is an affordable substitute for conventional
                development techniques that enables you to save money while
                achieving your goals.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="no-code-develop-services">
        <div className="container">
          <h4 className="hd text-center">
            Top No Code Development Services Provided by Writ Labs:
          </h4>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4">
              <div className="it-services-offer-card no-code">
                <div className="img-box">
                  <img src="img/bubble-icon.png" />{" "}
                </div>
                <h4 className="hd" style={{ fontSize: "25px" }}>
                  Bubble{" "}
                </h4>
                <p>
                  If you need assistance with developing apps or managing an
                  existing business, our bubble specialist is here to help. A
                  leading visual programming language that enables non-technical
                  individuals to create web applications without writing a
                  single line of code. Because of its drag-and-drop
                  capabilities, you have excellent control over the design
                  components.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card no-code">
              <div className="img-box">
                <img src="img/mailchimp-icon.png" />
                </div>
                <h4 className="hd" style={{ fontSize: "25px" }}>
                  Mailchimp{" "}
                </h4>
                <p>
                  Our Mailchimp professionals at Writ Labs can help you meet
                  your marketing goals. You can use this marketing automation
                  software to send emails to a list of email subscribers.
                  Mailchimp offers both free and premium pricing choices, a
                  wealth of functionality, an intuitive interface, and
                  substantial support resources.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="it-services-offer-card no-code">
              <div className="img-box">
                <img src="img/zapier-icon.png" />
                </div>
                <h4 className="hd" style={{ fontSize: "25px" }}>
                  Zapier
                </h4>
                <p>
                  Gmail, Slack, click up, Shopify, and many other business tools
                  are connected through the no-code automation platform Zapier.
                  By using Zapier to link your resources and automate your
                  marketing, sales, and financial administration activities, we
                  can help you lower your business costs and maintain agility.
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
