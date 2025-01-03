import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Home page components
// import Header from './components/Home/header';
import MainHeadline from './components/Home/MainHeadline';
import AboutUs from './components/Home/Aboutus';
import Engine from './components/Home/Engine';
import Transmission from './components/Home/Transmission';
import WhyChooseUs from './components/Home/WhyChooseUs';
import CustomerTestimonials from './components/Home/CustomerTestimonials';
import SearchInventory from './components/Home/SearchInventory';
import FeaturedProducts from './components/Home/FeaturedProducts';
import LeadCaptureForm from './components/Home/LeadCaptureForm';
import FAQs from './components/Home/FAQs';
// import Footer from './components/Home/Footer';
import Banner from './components/Home/banner';
import Newheader from './components/Home/newheader';
import ScrollToTop from './components/Home/scrolltotop';
import TopPageSection from './components/Home/TopPageSection';
import EnginePageFeatures from './components/Engine/EnginePageFeatures';
import StatsComponent from './components/Features/StatsComponent';
// import FeatureCards from './components/Features/FeatureCards';
import FreeConsultation from './components/Forms/FreeConsultation';
import Footer2 from './components/Home/newfooter';
import LoadingProvider from "../src/spinner"; // Adjust import as needed

// About page components
import AboutPage from './components/Aboutus/aboutus_page';
import EnginesPage from './components/Engine/Engines_page';
import TransmissionPage from './components/Transmission/Transmission_page';
import Contact_us_page from './components/Contact_Us/Contact_us';
import Shipping_policy from './components/Privacy_policy/shipping_policy';
import Warrenty_poilicy from './components/Privacy_policy/warrenty_poilicy';
import Term_Of_Services from './components/Privacy_policy/Term_Of_Services';
import Return_And_Cancellation_Policy from './components/Privacy_policy/Return_And_Cancellation_Policy';
import PrivacyPolicy from './components/Privacy_policy/Privacy Policy';
import ThankYouPage from './components/ThankYou/thankyou';
import FinanceProductGrid from './components/Financing/Financing';

function App() {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname !== '/thank-you') {
  //     // Add GTM script dynamically if not on thank-you page
  //     const script = document.createElement('script');
  //     script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11152279745';
  //     script.async = true;
  //     document.head.appendChild(script);

  //     const gtagScript = document.createElement('script');
  //     gtagScript.innerHTML = `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', 'AW-11152279745');
  //     `;
  //     document.head.appendChild(gtagScript);

  //     return () => {
  //       // Remove GTM script on unmount (cleanup) if route changes to `/thank-you`
  //       // document.head.removeChild(script);
  //       // document.head.removeChild(gtagScript);
  //     };
  //   }
  // }, [location.pathname]);

  return (
    <div className="App">
      <ScrollToTop />
      <TopPageSection />
      <Newheader />
      
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<>
            <MainHeadline />
            <Banner />
            <StatsComponent />
            <AboutUs />
            <Engine />
            <Transmission />
            <WhyChooseUs />
            <CustomerTestimonials />
            <FreeConsultation />
            <SearchInventory />
            <FeaturedProducts />
            <LeadCaptureForm />
            <EnginePageFeatures />
            <FAQs />
            <Footer2/>
          </>} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/engines" element={<EnginesPage />} />
          <Route path="/transmission" element={<TransmissionPage />} />
          <Route path="/shipping_policy" element={<Shipping_policy />} />
          <Route path="/warrenty_poilicy" element={<Warrenty_poilicy />} />
          <Route path="/Term_Of_Services" element={<Term_Of_Services />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Return_And_Cancellation_Policy" element={<Return_And_Cancellation_Policy />} />
          <Route path="/contact" element={<Contact_us_page />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/Financing" element={<FinanceProductGrid />} />
        </Routes>
      </LoadingProvider>
    </div>
  );
}

export default App;
