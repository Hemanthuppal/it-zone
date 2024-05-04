

import React, { useState,useEffect,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cc5 from "../../img/cc5.jpg";
import cc2 from "../../img/cc2.jpg";
import cc3 from "../../img/cc3.jpg";
import cc4 from "../../img/cc4.png";
import data3 from "../../img/data3.webp";
import lap from "../../img/lap.jpg"
import part6 from '../../img/part6.jpg';
import camera2 from '../../img/cc-camera2.webp'
import hardware from "../../img/hardware.jpeg";
import computer1 from '../../img/computer1.jpg'
import { Link } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';
import HomeVideo from './HomeVideo';
import Cards from "./Cards";
const Home = () => {
  // const [showHomeCards, setShowHomeCards] = useState([]);
  // const HomeCardsRef = useRef(null);

  // useEffect(() => {
  //   const HomeCards = Array.from(HomeCardsRef.current.children);
  
  //   const handleScroll = () => {
  //     if (HomeCardsRef.current) {
  //       const HomeCardsTop = HomeCardsRef.current.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       if (HomeCardsTop < windowHeight * 0.75) {
  //         HomeCards.forEach((card, index) => {
  //           const timeout = setTimeout(() => {
  //             setShowHomeCards((prev) => [...prev, index]);
  //           }, index * 150); // Adjust the delay between cards as needed
  
  //           return () => clearTimeout(timeout);
  //         });
  
  //         window.removeEventListener("scroll", handleScroll);
  //       }
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  
 
  return (
    <>
     {/* <div className="homecontainer mt-5"></div> */}
   
     <div style={{marginTop:'90px'}}><HomeVideo /></div>
      
      
      {/* <div className="homecontainer mt-5">
  <div ref={HomeCardsRef} className="home-HomeCards d-flex justify-content-between">
    <div className={`home-card ${showHomeCards.includes(0) ? "show" : ""}`}>
      <img src={cc3} alt="" className="service-img " />
      <h3>Our business areas</h3>
      <p>IT-Zone’s operations are organized into four global business areas, which in turn are made up of 21 divisions.</p>
    </div>
    <div className={`home-card ${showHomeCards.includes(1) ? "show" : ""}`}>
      <img src={data3} alt="" className="service-img" />
      <h3>Contact us</h3>
      <p>Get in touch with IT-Zone and find the right resources to help. Connect with us today to discover how we can help your requirement.</p>
    </div>
    <div className={`home-card ${showHomeCards.includes(2) ? "show" : ""}`}>
      <img src={lap} alt="" className="service-img" />
      <h3>Our purpose</h3>
      <p>We provide always our best services to our clients and always try to achieve our client's trust and satisfaction.</p>
    </div>
    <div className={`home-card ${showHomeCards.includes(3) ? "show" : ""}`}>
      <img src={cc2} alt="" className="service-img" />
      <h3>Technology and innovation</h3>
      <p>IT-Zone spearheads transformative advancements spanning diverse industrial technologies, ensuring comprehensive value delivery.</p>
    </div>
  </div>
</div> */}
<div className="homecontainer mt-5"><Cards /></div>


      <div className="homecontainer mt-5">
        <div className="background-homecontainer">
          <img src={cc5} alt="Laptop" className="product-image" />
          <div
            className="text-content bg-white p-5 "
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h2 className="text-center subheading">Products</h2>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
            
            <a href="/products" style={{ textDecoration: 'none' }}>
  <div className="button-homecontainer">
    <button className="btn btn-primary narrow-button" style={{ background: "linear-gradient(to bottom right, #007bff, #ff073a)", color: "white" }}>Explore More</button>
  </div>
</a>


          </div>
        </div>
      </div>

      <div className="homecontainer mt-5">

      <div className="background-homecontainer">
          <img src={part6} alt="Laptop" className="product-image" />
          <div
            className="text-content text-image bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h2 className="text-center subheading">Our Services</h2>
            <p>
            iTZ-ONE differentiates itself from its larger industry counterparts with a unique understanding of the challenges both consulting 
    companies and their clients face. This has motivated our market positioning, where we prioritize hands-on involvement and accountability
     with our customers. 
            </p>
           
            <a href ="/services" style={{ textDecoration: 'none' }}>
      <div className="button-homecontainer">
      <button className="btn btn-primary narrow-button" style={{ background: "linear-gradient(to bottom right, #007bff, #ff073a)", color: "white",textDecoration:'none' }}>Explore More</button>
      </div>
    </a>
          </div>
        </div>
        
      </div>

      <div className="homecontainer2 mt-5">
      <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h2 className="text-center subheading">About Us</h2>
                <p>
                In the IT industry, our team decided to alter direction. Now, we share our experiences to help others. Our ramp up 
                process is designed to empower your technical team or staff your company with the services they need to succeed. Ask 
                us about the following services: iT-ZONE offers rapid, cost-effective IT solutions to the business challenges faced by 
                companies through its in-depth experience and knowledge, technological expertise, and project management skills. 
                iT-ZONE has earned an excellent reputation as a solution- oriented organisation specialising in assisting its clients 
                in developing innovative strategies, the crafting of business effective technology solutions and the successful 
                execution of highly complex projects.<br></br>
                With over 10 years of combined proven industry experience and technology proficiency to draw on, iT-ZONE can and does deliver significant incremental value to the realisation of our customer’s needs

                </p>
                <a href="/about" style={{ textDecoration: 'none' }}>
  <div className="button-homecontainer" >
    <button className="btn btn-primary narrow-button" style={{ background: "linear-gradient(to bottom right, #007bff, #ff073a)", color: "white",textDecoration:'none' }}>Explore More</button>
  </div>
</a>



              </div>
              <div className="col-md-6 ">
                <img src={cc2} alt="Laptop" className="image" />
                <img src={cc4} alt="Laptop" className="image ipad-class mt-3" />
                <img src={cc3} alt="Laptop" className="image ipad-class mt-3" />
              </div>
              </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
