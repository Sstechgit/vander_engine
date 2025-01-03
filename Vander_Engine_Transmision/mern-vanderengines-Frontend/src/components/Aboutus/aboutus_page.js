import React from "react";
import "./aboutus_page.css";
import Header from "../Home/header";
import Footer from "../Home/Footer";
import Footer2 from '../Home/newfooter';
import CustomerTestimonials from "../Home/CustomerTestimonials"

function About() {
    
  return (
    <>
    {/* <Header/> */}
    
    <div className="about">
      <h1>About Us</h1>
      <p>Hello,</p>
      <br />
      <p>
      Vander Engines Transmissions is a leading provider of high-quality used 
      engines and transmissions in the United States. We specialize in offering 
      a wide range of affordable, reliable, and thoroughly tested automotive parts 
      for various vehicle brands and models. Our engines are highly tested and inspected 
      before we deliver it to you. We are one of the most trusted suppliers of 
      used engines and used transmissions. At our yards you can find the perfect match 
      for your vehicle remanufactured engines and transmissions.
      </p>
      <br />
      <p>
      Whether you are looking to replace a worn-out engine or transmission in your car, 
      truck, or SUV, Vander Engines Transmissions has got you covered. Our extensive inventory 
      includes engines and transmissions for domestic and foreign vehicles, ensuring that you 
      find the exact part you need, no matter the make or model.
      </p>
      <br />
      <p>
      At Vander Engines Transmissions, we understand the importance of performance and reliability 
      when it comes to your vehicle. We take pride in offering high-quality parts at competitive 
      prices, helping customers save on costly repairs while maintaining the performance and 
      longevity of their vehicles.
      </p>

      <h3>Browse through some of our videos</h3>
      <br />
      <CustomerTestimonials/>

      {
      /* to add videos in future
       <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MsBuNcEB-6Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DFRdZZYwljc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfECwILwlrg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
         */}
      
    </div>
    <Footer2/>
    </>
  );
}

export default About;
