import React, { useState,useEffect, useRef } from "react";
import "./Services.css";
import repairImage1 from "../../img/part6.jpg";
import repairImage2 from "../../img/data1.jpg";
import repairImage3 from "../../img/licenses5.png";
import repairImage4 from "../../img/cc5.jpg";
import repairImage5 from "../../img/part5.webp";
import repairImage6 from "../../img/cc-camera.webp" ;
import Carousel from "./Carousel";

const Services = () => {

  
  const refs = useRef([]);
  if (refs.current.length !== 7) {  // You need six refs, 3 pairs of content and image
    refs.current = Array(7).fill().map((_, i) => refs.current[i] || React.createRef());
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    observer.unobserve(entry.target);  // Only animate once
                }
            });
        },
        {
            rootMargin: '0px',  // You can adjust this
            threshold: 0.1  // Lower threshold for better mobile responsiveness
        }
    );

    refs.current.forEach(ref => {
        if (ref.current) observer.observe(ref.current);
    });

    return () => {
        refs.current.forEach(ref => {
            if (ref.current) observer.unobserve(ref.current);
        });
        observer.disconnect();
    };
}, []);




  return (
    
      <div className="container" style={{paddingTop:"120px"}}>
        
        <div className="services-container">
          <h1 className="text-center">Our Services</h1>
          <p>
            iTZ-ONE differentiates itself very specifically from its larger
            industry counterparts. A unique understanding of the challenges
            facing both consulting companies as well as the organizations that
            utilize their services has to a large extent motivated the market
            positioning of iTZ-ONE. Rather than adopt an indifferent,
            non-accountable stance with its customers, iTZ-ONE has chosen the
            route of hands-on involvement and accountability.
          </p>
        </div>

        <div className="service-container container1" id="laptop-repair">
          <div className="service-image">
            <img src={repairImage1} alt="Laptop Repair" />
            <img
              src={repairImage5}
              alt="Data Backup & Recovery"
              className="ipad-class mt-2"
            />
          </div>
          <div className="service-content service-service-content-animate" ref={refs.current[6]} style={{ textAlign: "justify" }}>
            <h3>Laptop Repair Service and Sales</h3>
            <p>
              Welcome to our Laptop Repair Service and Sales, <br />
              At IT-ZONE, we understand the importance of your laptop in today's
              digital world. Whether you're a student, professional, or simply
              rely on your laptop for personal use, we are here to provide you
              with reliable repair services and top-notch laptop sales. Our team
              of skilled technicians is dedicated to delivering exceptional
              customer service and ensuring that your laptop is functioning at
              its best.
            </p>
          </div>
        </div>

        <div className="service-container container2" id="data-backup&recovery">
          <div className="service-content service-service-content-animate" ref={refs.current[0]} style={{ textAlign: "justify" }}>
            <h3>Data Backup & Recovery</h3>
            <p>
              The backup and recovery of data is the process of backing up your
              data in the event of a loss and setting up secure systems that
              allow you to recover your data as a result. Data backup requires
              the copying and archiving of computer data to make it accessible
              in case of data corruption or deletion.
            </p>
          </div>
          <div className="service-image service-image-animate" ref={refs.current[1]}>
            <img src={repairImage2} alt="Data Backup & Recovery" />
          </div>
        </div>

        <div className="service-container container3" id="software-licensing-service">
          <div className="service-image">
            <img src={repairImage3} alt="Software Licensing Service" />
          </div>
          <div className="service-content">
            <h3>Software Licensing Service</h3>
            <p style={{ marginLeft: "2px" }}>
              We are a One Stop Shop for purchasing Licenses for multiple
              Software Products. To offer you the best software solutions, we
              have partnered with Global IT companies who deliver world-class
              software products.
            </p>
          </div>
        </div>

        <div className="service-container container4" id="cctv-installation">
          <div className="service-content service-service-content-animate" ref={refs.current[3]} style={{ textAlign: "justify" }}>
            <h3>CCTV Camera Installation</h3>
            <p style={{ marginLeft: "12px" }}>
              ITZ-ONE is a seller of security cameras, video recorders (DVR,
              NVR), surveillance systems, and all other things CCTV. We
              customize CCTV Projects on any Small or Larger number of
              Cameras..! All of our systems come fully equipped to handle all of
              your remote viewing needs. No matter where you are in the world,
              as long as you have an internet connection, you’ll be able to view
              your video feed at any time you want. You don’t need to have
              expert knowledge of CCTV systems, just a helpful and willing
              support staff that’s more than happy to assist you with anything
              you may need. CCTV Surveillance Projects we take up Commercial,
              Govt/Private, Residential, Small business or Shops. Stay
              “anywhere”, View from “anywhere” – free mobile app view
            </p>
          </div>
          <div className="service-image service-image-animate" ref={refs.current[4]}>
            <img src={repairImage4} alt="CCTV Camera Installation" />
            <img 
              src={repairImage6}
              alt="Data Backup & Recovery"
              className="ipad-class mt-2"
            />
            {/* <img
              src={repairImage1}
              alt="Data Backup & Recovery"
              className="ipad-class mt-2"
            /> */}
          </div>
        </div>
      </div>
    
  );
};

export default Services;