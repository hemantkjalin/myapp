import { useState, useEffect } from "react";
import { LetContact } from "../Letcontact";

export const UiDetails = () => {
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
  console.log(currentStep);
  return (
    <>
      <section className="ui-details services-details">
        <div className="container">
          <div className="service-detail-hd">
            <h1>UI/UX Design</h1>
            <p>Home-Services</p>
          </div>
        </div>
      </section>

      <div className="services-details-data">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="service-detail-hd-two">
                <h4>About</h4>
                <h2>UI/UX Design</h2>
              </div>
              <p>
                Writ Labs is a top-notch UI/UX design company in Mohali creating
                result-driven products for clients. Our team is specialized in
                creating stunning and seamless UI/UX designs that provide a
                better user experience through integrated effective
                collaboration, and streamlined projects that aim for better
                results.
              </p>

              <div className="d-flex align-items-center mt-5">
                <img src="img/service-design-process.png" />
                <div className="ml-4">
                  <h5>
                    <b> UI/UX Design Process </b>{" "}
                  </h5>
                  <p className="mb-0">
                    Research, UI/UX Wireframing, Prototype Testing, Development,
                    UI Testing Process
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-5 mb-4">
                <img src="img/service-design-tools.png" />
                <div className="ml-4">
                  <h5>
                    {" "}
                    <b> UI/UX Designing Tools </b>{" "}
                  </h5>
                  <p className="mb-0">
                    Sketch, Figma, Adobe XD, Adobe Photoshop, Mockplus
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <img src="img/User-flow.svg" />
            </div>
          </div>

          <p style={{ marginTop: "40px", fontSize: "20px" }}>
            Writ Labs is committed to enhancing your brand’s value with our
            top-class UI/UX design services. Our UX/UI development team has over
            12 years of experience in web application development. We know how
            users interact with apps and how to create an eye-catching and
            easy-to-use user interface that offers an enjoyable experience for
            your target audience.
          </p>

          {/* kfd */}
          <section>
            <div className="text-center">
              <h4 className="hd">Our UI/UX Design Process</h4>
              <p className="mx-auto" style={{ width: "80%" }}>
                The UI/UX design process can be divided into five key phases:
                Research, UI/UX Wireframing, Prototype Testing, Development, and
                UI Testing Process.
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
                          business objective, target audience, and competitors
                          prior to beginning work to ensure that the design is
                          deserving.
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
                          We use programs like Photoshop to build wireframes,
                          which serve as the app's skeleton. Before adding
                          aesthetic design and functionality, the program is
                          just designed in its simplest form.
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
                          Clients can visualize the user experience before the
                          final design is executed thanks to the interactive
                          models we produce that imitate user interactions. This
                          gives you a preview of how your app or website will
                          seem in its finished form.
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
                          recommendations on how to enhance the functionality
                          and performance.
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
                          Checking for errors and bugs, providing
                          recommendations on how to improve the functionality
                          and performance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* dfj */}

          <section className="design-tools">
            {/* <div className="row">
              <div className="col-lg-6"> */}
            <div className="sec-hd text-center">
              <h4 className="hd">UI/UX Design Tools</h4>
              <p>
                These tools play a vital role in the UI/UX designing process
                helping designers to visualize their ideas and create
                interactive prototypes.
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
                    <img src="img/sketch-design-tool2.png" />
                    <h4 className="mt-4">Sketch</h4>
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
                    <img src="img/figma-design-tool2.png" />
                    <h4 className="mt-4">Figma</h4>
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
                    <img src="img/xd-design-tool2.png" />
                    <h4 className="mt-4">Adobe XD</h4>
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
                    <img src="img/ps-design-tool2.png" />
                    <h4 className="mt-4">Adobe Photoshop</h4>
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
                    <img src="img/mockplus-design-tool2.png" />
                    <h4 className="mt-4">Mockplus</h4>
                    {/* <p>
                      A cloud-based prototyping tool that helps designers to
                      create user-friendly prototypes for websites and mobile
                      apps.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* </div>

              <div className="col-lg-6"> */}
          {/* <img src="img/ui-design-tools.png" />{" "} */}
          {/* </div> 
               </div> */}

          <section>
            <div className="row">
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
            </div>

            <ul className="design-tools mt-4">
              <li>
                <p>
                  <span>
                    <b> Logo Design: </b>
                  </span>
                  Grow your business with an attractive custom logo designed by
                  our designer at Writ Labs. A professional logo design process
                  plays an important role to attract the target audience.
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
                    <b> Banner Design: </b>
                  </span>
                  Marketing a business's goods or services through banner design
                  is quite effective. The banners designed by Writ Labs would be
                  an inventive way to promote brand awareness and draw in new
                  clients that directly target an audience's purchasing intent.
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
                    <b> Landing Page Design: </b>
                  </span>
                  Get an SEO-friendly landing page for your company and
                  establish a strong online presence. Writ Labs experts can
                  design a professional landing page that can increase traffic,
                  target a quality audience, and boost revenue.
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
                    <b> Mockup Design: </b>
                  </span>
                  At Writ Labs, our dedicated team of custom mockup designers
                  will take your business to the next level through eye-catchy
                  mockup designs that promote and elevate your brand’s identity.
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
                    <b> Brochure Design: </b>
                  </span>
                  Our skilled professionals and brochure designing experts
                  create an eye-catching and informative brochure that resonates
                  with the target audience and turns prospects into clients.
                </p>
              </li>

              <li>
                <p>
                  <span>
                    <b> Dashboard Design: </b>
                  </span>
                  The UI/UX Dashboard Design combines the principles of user
                  interface and user experience design to create a visually
                  appealing dashboard for users.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <LetContact />

      {/* <StepperComponent /> */}
      {/* <Stepper /> */}
    </>
  );
};
