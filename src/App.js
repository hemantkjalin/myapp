import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { UiDetails } from "./Components/Services/UiDetails";
import { WebDevelopment } from "./Components/Services/WebDevelopment";
import { AboutPage } from "./Components/Pages/AboutPage";
import { OurTeam } from "./Components/Pages/OurTeam";
import { ServicesPage } from "./Components/Pages/ServicesPage";
import { ItConsultant } from "./Components/Services/ItConsultant";
import { NoCode } from "./Components/Services/NoCode";
import { DigitalMarketing } from "./Components/Services/DigitalMarketing";
import { IndustriesPage } from "./Components/Pages/IndustriesPage";
// import { Animationcircle } from "./Components/Services/AnimationCircle";

export const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          {/* <ItConsultant /> */}
          {/* <ServicesPage /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ui-services" element={<UiDetails />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/it-consulting" element={<ItConsultant />} />
            <Route path="/no-code" element={<NoCode />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/services" element={<ServicesPage />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};
