import { useState } from "react";
import GeneralHeader from "./Components/GeneralHeader";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import SMO from "./Services/SMO";
import WebDevelopment from "./Services/WebDevelopment";
import ContentWriting from "./Services/ContentWriting";
import SEO from "./Services/SEO";
import BPO from "./Services/BPO";
import Graphic from "./Services/Graphic";
import PayPerClick from "./Services/PayPerClick";
import Career from "./Pages/Career";
import Portfolio from "./Pages/Portfolio";
import Popup from "./Pages/Popup";
import Popup2 from "./Components/Popup2";
import ThankYou from "./Pages/ThankYou";
import PricingBox from "./Components/PricingBox";
import Courses from "./Pages/Courses";
import Privacy from "./Pages/Privacy";
import Offers_courses from "./Pages/offers_courses";
import Mentors_courses from "./Pages/Mentors_courses";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
   {/* This component handles the scroll-to-top behavior */}
        {/* Routes with header and footer */}
        <Route
          path="/"
          element={
            <>
                <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/social-media-marketing-agency-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <SMO />
              <Footer />
            </>
          }
        />

        <Route
          path="/web-development-agency-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <WebDevelopment />
              <Footer />
            </>
          }
        />

        <Route
          path="/content-writing-agency-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <ContentWriting />
              <Footer />
            </>
          }
        />

        <Route
          path="/ppc-company-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <PayPerClick />
              <Footer />
            </>
          }
        />

        <Route
          path="/PricingBox"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <PricingBox />
              <Footer />
            </>
          }
        />

        <Route
          path="graphic-design-services-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Graphic />
              <Footer />
            </>
          }
        />

        <Route
          path="bpo-services-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <BPO />
              <Footer />
            </>
          }
        />

        <Route
          path="/seo-agency-chicago"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <SEO />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              {/* <GeneralHeader />
              <Header />
              <Blog />
              <Footer /> */}
            </>
          }
        />

        <Route
          path="career"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Career />
              <Footer />
            </>
          }
        />

        <Route
          path="courses"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Courses />
              <Footer />
            </>
          }
        />

        <Route
          path="portfolio"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Portfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
         <Route
          path="about"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <About />
              <Footer />
            </>
          }
        />


        <Route
          path="Privacy"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Privacy />
              <Footer />
            </>
          }
        />

        <Route
          path="thankyou"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <ThankYou />
              <Footer />
            </>
          }
        />
        
        <Route
          path="mentorcourses"
          element={
            <>
            <ScrollToTop />
              <GeneralHeader />
              <Header />
              <Mentors_courses/>
              <Footer />
            </>
          }
        />
        {/* Popup route without header and footer */}
        <Route path="popup2" element={<Popup2 />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
