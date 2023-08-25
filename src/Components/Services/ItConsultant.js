import { LetContact } from "../Letcontact";
import { useState, useEffect } from "react";

export const ItConsultant = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(0); // Loop back to step 1 after step 3
      }
    }, 3000); // Change the time interval as needed

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentStep]);
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

      {/* <section className="about-itConsulting">
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
                  technological strategies. With the help of our advanced IT
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
      </section> */}

      <section className="services-details-data">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="service-detail-hd-two">
                <h4>About</h4>
                <h2>IT Consulting</h2>
              </div>
              <p>
                Writ Labs, a Mohali-based IT consulting firm, provides advisory
                services that assist clients in evaluating various technological
                strategies. With the help of our advanced IT consulting
                services, your business stays secure and profitable. A company
                can easily adopt new technologies and business strategies and
                align them with their business goals and objectives.
              </p>

              <div className="d-flex align-items-center mt-5">
                <img src="img/service-design-process.png" />
                <div className="ml-4">
                  <h5>
                    <b> Our IT Consulting Process </b>{" "}
                  </h5>
                  <p className="mb-0">
                    Initial Assessment & Discovery, Analysis & Strategy
                    Development, Solution Design & Planning, Implementation &
                    Execution, Monitoring
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-5 mb-4">
                <img src="img/service-design-tools.png" />
                <div className="ml-4">
                  <h5>
                    {" "}
                    <b> IT Consulting Tools </b>{" "}
                  </h5>
                  <p className="mb-0">
                    Project Management & Collaboration, Remote Support &
                    Troubleshooting, Cloud & Infrastructure Management,
                    Communication & Collaboration
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pl-5">
              <img
                className="it-consult-rt"
                src="img/it-consulting-rt.svg"
                alt="it consulting"
              />
            </div>
          </div>

          <p style={{ marginTop: "40px", fontSize: "20px" }}>
            We provide innovative solutions that can assist organizations in
            leveraging technology to promote growth, improve operational
            efficiency, and boost customer experience. Our services include
            strategy, issue resolution, and planning. The experts evaluate your
            needs and offer specialized software solutions for digital
            transformation.
          </p>
        </div>
      </section>

      {/* kfd */}
      <section>
        <div className="text-center">
          <h4 className="hd">Our IT Consulting Process</h4>
          <p className="mx-auto" style={{ width: "50%" }}>
            The IT Consulting process can be divided into five key phases:
            Initial Assessment & Discovery, Analysis & Strategy Development,
            Solution Design & Planning, Implementation & Execution, Monitoring,
            Optimization & Support
          </p>
        </div>

        <div className="ui-dp-body js-animation-elem">
          <div className="ui-dp-container js-dp-container active">
            <div className="ui-dp-circle under-circle js-dp-circle active">
              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 1 && "active"
                } `}
                style={{
                  transform: "translateX(19.5284px), translateY(275.702px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__circle"></div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 2 && "active"
                } `}
                style={{
                  transform: "translateX(163.485px) translateY(74.017px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__circle"></div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 3 && "active"
                } `}
                style={{
                  transform: "translateX(399px) translateY(0px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__circle"></div>
              </div>
              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 4 && "active"
                } `}
                style={{
                  transform: "translateX(561.288px) translateY(34.4954px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__circle"></div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 5 && "active"
                } `}
                style={{
                  transform: "translateX(778.472px) translateY(275.702px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__circle"></div>
              </div>
            </div>

            <div
              className="ui-dp-circle js-dp-circle js-dp-active active"
              style={{ transform: `rotate(${56}deg)` }}
            >
              <div
                className="ui-dp-step js-dp-step active"
                style={{
                  transform: "translateX(19.5284px) translateY(275.702px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-active"></div>
              </div>
            </div>

            <div className="ui-dp-circle js-dp-circle js-dp-controls active">
              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 1 && "active"
                } `}
                style={{
                  transform: "translateX(19.5284px) translateY(275.702px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__number">
                  <div className="ui-dp-step__number-inside">1</div>
                </div>

                <div className="ui-dp-step__title">Research</div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 2 && "active"
                } `}
                style={{
                  transform: "translateX(166.485px) translateY(77.017px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__number">
                  <div className="ui-dp-step__number-inside">2</div>
                </div>

                <div className="ui-dp-step__title">
                  UI/UX <br /> Wireframing
                </div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 3 && "active"
                } `}
                style={{
                  transform: "translateX(399px) translateY(0px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__number">
                  <div className="ui-dp-step__number-inside">3</div>
                </div>

                <div className="ui-dp-step__title">Prototype Testing</div>
              </div>
              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 4 && "active"
                } `}
                style={{
                  transform: "translateX(561.288px) translateY(34.4954px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__number">
                  <div className="ui-dp-step__number-inside">4</div>
                </div>

                <div className="ui-dp-step__title">Development</div>
              </div>

              <div
                className={`ui-dp-step js-dp-step ${
                  currentStep === 5 && "active"
                } `}
                style={{
                  transform: "translateX(778.472px) translateY(275.702px)",
                  opacity: 1,
                }}
              >
                <div className="ui-dp-step__number">
                  <div className="ui-dp-step__number-inside">5</div>
                </div>

                <div className="ui-dp-step__title">
                  UI Testing
                  <br />
                  Process
                </div>
              </div>
            </div>

            <div className="ui-dp-content js-dp-content">
              <div className="ui-dp-content__inside">
                <div className="ui-dp-content__numbers">
                  <div className="ui-dp-content__numbers-inside">
                    <div
                      className={`ui-dp-content__number js-dp-number ${
                        currentStep === 1 && "active"
                      } `}
                    >
                      1
                    </div>
                    <div
                      className={`ui-dp-content__number js-dp-number ${
                        currentStep === 2 && "active"
                      } `}
                    >
                      2
                    </div>
                    <div
                      className={`ui-dp-content__number js-dp-number ${
                        currentStep === 3 && "active"
                      } `}
                    >
                      3
                    </div>
                    <div
                      className={`ui-dp-content__number js-dp-number ${
                        currentStep === 4 && "active"
                      } `}
                    >
                      4
                    </div>
                    <div
                      className={`ui-dp-content__number js-dp-number ${
                        currentStep === 5 && "active"
                      } `}
                    >
                      5
                    </div>
                  </div>
                </div>

                <div
                  className="ui-dp-content__body js-same-height"
                  style={{ height: "178px" }}
                >
                  <div
                    className={`ui-dp-content__body-inside js-same-height-elem js-dp-content-body ${
                      currentStep === 1 && "active"
                    } `}
                  >
                    <div className="ui-dp-content__title">Research</div>

                    <div className="ui-dp-content__text">
                      Our UX designers conduct a thorough analysis of your
                      business objective, target audience, and competitors prior
                      to beginning work to ensure that the design is deserving.
                    </div>
                  </div>
                  <div
                    className={`ui-dp-content__body-inside js-same-height-elem js-dp-content-body ${
                      currentStep === 2 && "active"
                    } `}
                  >
                    <div className="ui-dp-content__title">
                      UI/UX Wireframing
                    </div>

                    <div className="ui-dp-content__text">
                      We use programs like Photoshop to build wireframes, which
                      serve as the app's skeleton. Before adding aesthetic
                      design and functionality, the program is just designed in
                      its simplest form.
                    </div>
                  </div>
                  <div
                    className={`ui-dp-content__body-inside js-same-height-elem js-dp-content-body ${
                      currentStep === 3 && "active"
                    } `}
                  >
                    <div className="ui-dp-content__title">
                      Prototype Testing
                    </div>

                    <div className="ui-dp-content__text">
                      Clients can visualize the user experience before the final
                      design is executed thanks to the interactive models we
                      produce that imitate user interactions. This gives you a
                      preview of how your app or website will seem in its
                      finished form.
                    </div>
                  </div>
                  <div
                    className={`ui-dp-content__body-inside js-same-height-elem js-dp-content-body ${
                      currentStep === 4 && "active"
                    } `}
                  >
                    <div className="ui-dp-content__title">Development</div>

                    <div className="ui-dp-content__text">
                      Once the design is finalized, transfer all the design
                      material to the development team for further
                      implementation.
                    </div>
                  </div>
                  <div className="ui-dp-content__body-inside js-same-height-elem js-dp-content-body active">
                    <div className="ui-dp-content__title">
                      UI Testing Process
                    </div>

                    <div className="ui-dp-content__text">
                      Now our developers check errors and bugs and provide
                      recommendations on how to enhance the functionality and
                      performance.
                    </div>
                  </div>

                  <div
                    className={`ui-dp-content__body-inside js-same-height-elem js-dp-content-body ${
                      currentStep === 5 && "active"
                    } `}
                  >
                    <div className="ui-dp-content__title">
                      UI Testing
                      <br />
                      Process
                    </div>

                    <div className="ui-dp-content__text">
                      Checking for errors and bugs, providing recommendations on
                      how to improve the functionality and performance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dfj */}

      {/* <section style={{ paddingTop: "0" }}>
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
      </section> */}

      <section className="design-tools it-consulting">
        <div className="container">
          {/* <div className="row">
              <div className="col-lg-6"> */}
          <div className="sec-hd text-center">
            <h4 className="hd">IT Consulting Tools</h4>
            <p>
              These tools play a vital role in the UI/UX designing process
              helping designers to visualize their ideas and create interactive
              prototypes.
            </p>
          </div>
          {/* <ul className="design-tools-shortlist">
              <li>Sketch</li>
              <li>Figma </li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Mockplus</li>
            </ul> */}

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="design-tools-card">
                <div className="tools-card-data">
                  <img src="img/it-tools1.svg" alt="it tools" />
                  <h4 className="mt-4">Project Management and Collaboration</h4>
                  <ul>
                    {" "}
                    <li>Jira</li>{" "}
                  </ul>
                  {/* <p>
                      Sketch is used for designing, wireframing, and
                      prototyping. It has been considered an industry-powerful
                      tool, ideal for both beginners and advanced-level
                      designers.
                    </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="design-tools-card">
                <div className="tools-card-data">
                  <img src="img/it-tools2.svg" alt="it tools" />
                  <h4 className="mt-4">Remote Support and Troubleshooting</h4>
                  <ul>
                    {" "}
                    <li>TeamViewer</li> <li> AnyDesk </li>
                  </ul>
                  {/* <p>
                      A cloud-based design tool that allows designers to
                      collaborate in real-time on UI/UX projects.
                    </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="design-tools-card">
                <div className="tools-card-data">
                  <img src="img/it-tools3.svg" alt="it tools" />
                  <h4 className="mt-4">Cloud and Infrastructure Management</h4>
                  <ul>
                    {" "}
                    <li>Amazon Web Services (AWS) </li>
                    <li> Management Console </li>
                    <li>Google Cloud Console </li>
                  </ul>
                  {/* <p>
                      A fast and powerful tool used to create a vast range of
                      interfaces and prototypes.
                    </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="design-tools-card">
                <div className="tools-card-data">
                  <img src="img/it-tools4.svg" alt="it tools" />
                  <h4 className="mt-4">Communication and Collaboration</h4>
                  <ul>
                    {" "}
                    <li>Slack </li>
                    <li>Microsoft Teams </li>
                    <li>Zoom</li>{" "}
                  </ul>

                  {/* <p>
                      Adobe Photoshop is known for its versatility and ability
                      to transform ideas into visual masterpieces.
                    </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="design-tools-card">
                <div className="tools-card-data">
                  <img src="img/it-tools5.svg" alt="it tools" />
                  <h4 className="mt-4">Code and Script Management</h4>
                  <ul>
                    {" "}
                    <li>GitHub </li>
                    <li>GitLab</li>{" "}
                  </ul>
                  {/* <p>
                      A cloud-based prototyping tool that helps designers to
                      create user-friendly prototypes for websites and mobile
                      apps.
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="row">
              <div className="col-lg-6">
                <h4 className="hd mb-4">UI/UX Designing Services </h4>

                <ul className="design-tools-shortlist">
                  <li>Logo Design</li>
                  <li>Banner Design </li>
                  <li>Landing Page Design</li>
                  <li>Mockup Design</li>
                  <li>Brochure Design</li>
                  <li>Dashboard Design</li>
                </ul>
              </div>

              <div
                className="col-lg-6"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <img
                  src="img/ui-services-tools.webp"
                  style={{ width: "255px" }}
                />
              </div>
            </div> */}
        <div className="container">
          <h4 className="hd mb-4">IT Consulting Services Offer by Writ Labs </h4>
          <ul className="design-tools mt-4">
            <li>
              <p>
                <span>
                  <b> Application Development Consulting: </b>
                </span>
                For businesses to adopt new software and apps and enhance their
                IT systems, our IT consulting firm in Mohali concentrates on
                delivering Application Implementation services. To develop a
                one-of-a-kind application implementation plan, our team will
                work with you to understand your specific business requirements.
              </p>

              {/* <h5>Key Features:</h5>

                <ul className="design-tools-list">
                  <li> Easy to use </li>
                  <li> Vector Editing</li>
                  <li>Flexible Artboard</li>
                  <li> Simplified Export Process</li>
                  <li> Developer Handoff</li>
                </ul> */}
            </li>

            <li>
              <p>
                <span>
                  <b> Digital Transformation Consulting: </b>
                </span>
                To keep businesses ahead in the quick-paced digital world, we
                specialize in providing Digital Transformation Consulting
                services. We offer a variety of services, such as creating
                digital strategies, streamlining procedures, and enhancing the
                client experience.
              </p>

              {/* <h5>Key Features:</h5>

                <ul className="design-tools-list">
                  <li> Quite easy to use </li>
                  <li> Multiple options for designers </li>
                  <li> Offline Access </li>
                  <li> Flexible style </li>
                  <li> Modern pen tool </li>
                </ul> */}
            </li>

            <li>
              <p>
                <span>
                  <b> IT Strategy Consulting: </b>
                </span>
                Our team will work with you to identify the best technologies
                for your industry and business, develop an implementation plan,
                and install those technologies. To develop a customized IT
                strategy that supports these goals, we will jointly ascertain
                your company's needs.
              </p>

              {/* <h5>Key Features:</h5>

                <ul className="design-tools-list">
                  <li> Voice prototyping </li>
                  <li> Animation functionality </li>
                  <li> 3D transform </li>
                  <li> Vector-based UI tools </li>
                  <li> Real-Time Collaboration </li>
                </ul> */}
            </li>
            <li>
              <p>
                <span>
                  <b> Security Consulting Services: </b>
                </span>
                To offer professional advice and solutions, our security
                consulting services are a crucial component of our IT
                Consultation products.
              </p>

              {/* <h5>Key Features:</h5>

                <ul className="design-tools-list">
                  <li> Quick adaptability </li>
                  <li> Cloud Feature </li>
                  <li> Easy to make small edits </li>
                  <li> Animation Functionality </li>
                  <li> Color correction </li>
                </ul> */}
            </li>
            <li>
              <p>
                <span>
                  <b> Technology Consulting and Roadmapping: </b>
                </span>
                Writ Labs provides solutions such as technology road mapping and
                technology strategy development. The professionals collaborate
                with you to comprehend your business requirements and create a
                unique technology approach.
              </p>
            </li>

            {/* <li>
                <p>
                  <span>
                    <b> Dashboard Design: </b>
                  </span>
                  The UI/UX Dashboard Design combines the principles of user
                  interface and user experience design to create a visually
                  appealing dashboard for users.
                </p>
              </li> */}
          </ul>
        </div>
      </section>

      <LetContact />
    </>
  );
};
