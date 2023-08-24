export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-10">
              <div className="footer-data" style={{ paddingRight: "40px" }}>
                <img src="img/footer-logo.png" alt="" style={{width: "160px"}} />
                <p style={{ marginTop: "20px" }}>
                  It's our passion to create beautiful experiences that combine
                  brilliant ideas with stunning execution.
                </p>

                <div className="listing">
                  <div
                    className="listing-data"
                    style={{ display: "flex", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        className="contact-icon"
                        src="img/location-icon.svg"
                        alt=""
                      />
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                      <p style={{ margin: 0 }}>
                        C-175, City Business Centre, Phase 8B, Mohali, Punjab,
                        India
                      </p>
                    </div>
                  </div>

                  <div className="listing-data d-flex">
                    <div>
                      <img
                        className="contact-icon"
                        src="img/phone-icon.svg"
                        alt=""
                      />
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                      <p style={{ margin: 0 }}>(+91)7508243357</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4">
              <div className="footer-data about-list">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="https://www.google.com/">About Us</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Contact</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">FAQs</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4">
              <div className="footer-data">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="https://www.google.com/">Services</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Industries</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="footer-data">
                <h4>Newsletter</h4>
                <p>Sign-up for our newsletter</p>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label=""
                    aria-describedby=""
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      style={{ background: "#eaf0ff" }}
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <div className="icons">
                  <img src="img/fb-icon.png" alt="" />
                  <img src="img/insta-icon.png" alt="" />
                  <img src="img/linkedin-icon.png" alt="" />
                  <img src="img/twitter-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center mt-3">
        Copyright © 2023 Writ Labs. All Rights Reserved.
      </p>
    </>
  );
};
