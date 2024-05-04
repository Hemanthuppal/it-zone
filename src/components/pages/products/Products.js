import React, { useState,useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lap from "../../img/lap.jpg";
import cc2 from "../../img/cc2.jpg";
import computer3 from "../../img/wifi2.jpg";
import computer123 from "../../img/computer123.png";
import Hardware from "../../img/enterprivec.png";
import hardware from "../../img/Hardware1234.webp";
import enterprise from "../../img/enterprise.webp";
import enterprise123 from "../../img/enterprise123.webp";
import apple from "../../img/applelaptop.jpg"; // Replace with actual path to image
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import cc3 from "../../img/cc3.jpg";
import cc1 from "../../img/cc1.jpg";
import wifi from "../../img/wifi.jpg";
import wifi4 from '../../img/wifi4.jpg'
import computer1 from '../../img/computer1.jpg';
import cable4 from '../../img/cabel4.webp';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Create an array of refs
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
    <div>
      <div className="container "style={{paddingTop:"120px"}}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Products</h1>
          </div>
        </div>
      </div>
      <div className="container section" id="laptops">
        <div className="background-container">
          <img src={lap} alt="Laptop" className="product-image" />
          <div
            className="text-content bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3>Laptop & Computer Brand</h3>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
            {/* <Button onClick={handleShow} className="discover-more-btn">
              view more
            </Button> */}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Laptop & Computer Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Put any content you want in the modal here */}
          The details about the laptop and computer brand...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div className="container mt-5">
  <div className="background-container" >
    <div className="text-content  bg-white p-5" id="unique-text-content">
      <div className="red-dash" id="unique-red-dash"></div>
      <h3>Laptop & Computer Brand</h3>
      <p>iTZ-ONE is one of the leading companies in Computer Sales and Services that is gaining momentum each day. Backed by a strong team of highly-skilled professionals, we provide world-class services...</p>
    </div>
    <img src={lap} alt="Laptop" className="product-image" id="unique-product-image"/>
  </div>
</div> */}

<div className="container mt-5 section" id="cctv-services">
  <div className="card">
    <div className="card-body">
      <div className="row">
      <div className="col-md-6 content-animate" ref={refs.current[0]} style={{ textAlign: "justify" }}>
          <h3 className="text-center">CCTV Services</h3>
          <p>
          iTZ-ONE provides an Annual Maintenance Contract designed to assist you with installing and maintaining CCTV cameras at various locations including business premises, homes, factories, and offices. This service ensures that you can monitor all activities and individuals entering your premises. Additionally, our maintenance support helps keep your CCTV system updated and functioning optimally, ensuring your peace of mind. We pride ourselves on offering top-notch services in the city at highly competitive rates. With iTZ-ONE, you benefit from our expert technicians who are available to address any issues promptly, making sure that your surveillance system is always reliable.
          Furthermore, iTZ-ONE offers customized solutions tailored to meet the specific security needs of each client. Our proactive approach includes regular system checks and updates to prevent potential problems before they arise, enhancing system reliability and extending its lifespan. Additionally, our team is trained to handle a variety of scenarios, ensuring they can swiftly adapt to and resolve any situation that may occur.
          </p>
        </div>
        <div className="col-md-6 image-animate" ref={refs.current[1]}>
          <img src={cc2} alt="CCTV Camera" className="image mt-4" />
          <img src={cc1} alt="CCTV Camera" className="image ipad-class mt-5" />
          <img src={cc3} alt="CCTV Camera" className="image ipad-class mt-5" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container mt-5 section" id="hardware">
        <div className="background-container">
          <img src={hardware} alt="Laptop" className="product-image" />
          <div
            className="text-content text-image bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3 className="text-center">Hardware & Networking Solutions</h3>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
           
          </div>
        </div>
      </div>

      {/* <div className="container mt-5">
      <div className="card">
        <div className="card-body sample">
          <div className="content-overlay">
            <img src={cc2} alt="Laptop" className="image-overlay" />
            <div className="text-content bag bg-white">
              <h3 className="text-center">Hardware & Networking Solutions</h3>
              <p>iTZ-ONE is one of the leading companies in Computer Sales and Services that is gaining momentum each day. Backed by a strong team of highly-skilled professionals, we provide world-class services. We sell to our customers the latest and most reliable computers, which meet industry standards and come with the finest features and functions. Moreover, we have our own service center to bring out more technical solutions for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="container mt-5 section" id="wifi-solutions">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 content-animate" ref={refs.current[3]} style={{ textAlign: "justify" }}>
                <h3 className="text-center">Enterprise Wi-Fi Solutions</h3>
                <p>
                  Today, businesses need fast and reliable internet connectivity
                  to be productive. This is true, especially in sectors where
                  companies utilize machine learning and artificial intelligence
                  in their systems. This need has led to the rise of enterprise
                  Wi-Fi solutions. These are advanced networks that use
                  strategic design, more access points, and better equipment to
                  create reliable web connectivity for business users.
                  Enterprise Wi-Fi utilizes slightly different management
                  methods and protocols compared to consumer networks. The
                  equipment can support bigger loads without being affected by
                  dropped or dead signals. An administrator controls access so
                  that only authorized people are able to connect. 
                  The
                  equipment can support bigger loads without being affected by
                  dropped or dead signals. An administrator controls access so
                  that only authorized people are able to connect. 
                </p>
              </div>

              <div className="col-md-6 image-container image-animate" ref={refs.current[4]}>
                <img src={computer3} alt="Laptop" className="image1" style={{marginTop:"-20px"}} />
                <img
                  src={wifi}
                  alt="Laptop"
                  className="image1 ipad-class pt-2"
                />
                <img
                  src={wifi4}
                  alt="Laptop"
                  className="image1 ipad-class pt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 section" id="software">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div
                className="col-md-12 text-center"
                style={{ textAlign: "justify" }}
              >
                <h3>Software Installation Support</h3>
              </div>
              <div className="col-md-12 " style={{ textAlign: "justify" }}>
                <p>
                  iTZ-ONE provides you with software installation services at
                  convenient rates. You must be thinking that why you need a
                  company when you can install software on your own? Well, we
                  have seen a drastic change in the computing industry over the
                  past few years. Know the size of computers has become small
                  and they work at an exceptional speed and this is because of
                  the modern software technology. Various complex software has
                  been introduced in the market by different organizations and
                  installing highly complex software is not easy as it required
                  a lot of time and energy. We are living in a world where
                  computers and laptops have completely taken over us. Our life
                  wouldn’t work without this electronic equipment. They have
                  become the primary part of our lives, especially after the
                  covid crisis. People who are familiar with the technicalities
                  of computers can easily install any sort of software. However,
                  people who are not familiar with the complexities of
                  modern-day computers, wouldn’t install large and complicated
                  software, on their own. To help people in dealing with such
                  complexed software our technicians are providing remarkable
                  services. We take your stress away by providing you with the
                  latest software installation services for your laptops,
                  computers, and desktops. We assure you that we’ll install the
                  correct software for your computers. Another thing that we
                  guarantee you is we provide you with legal and virus-free
                  software. Whether you need OS installation and repairing
                  services or software installation services, our experts will
                  just help.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="row h-100">
              <div className="col-md-6" style={{ textAlign: "justify" }}>
                <h6>Our software installation services include:</h6>
                <ul>
                  <li>Office Software.</li>
                  <li>Business and analytical Software.</li>
                  <li>Software Settings & Updates.</li>
                  <li>Licensing Software, antivirus software. </li>
                  <li>Photo editing software. </li>
                </ul>

                <h6>
                  And for laptops and desktops, we provide the following OS
                  installation services.{" "}
                </h6>
                <ul>
                  <li>Windows 7 & 10 Installations.</li>
                  <li>Windows O/S Repairs.</li>
                  <li>Setting Window for New Computer.</li>
                  <li>Windows Settings and updates. </li>
                  <li>
                    Linux Operating System Support and up-gradation of windows.{" "}
                  </li>
                </ul>
              </div>
              <div className="col-md-6 h-">
                <img src={computer123} alt="Laptop" className="image1" />
                <img
                  src={computer1}
                  alt="Laptop"
                  className="image1 ipad-class "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-5 section" id="enterprise-solutions">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6  " >
              <img src={enterprise} alt="Laptop" className="image p-2" style={{height:"320px"}} />
              <img src={enterprise123} alt="Laptop" className="image ipad-class mt-5 p-2" />
              {/* <img src={enterprise} alt="Laptop" className="image ipad-class mt-5 p-2" /> */}
              </div>
              <div className="col-md-6  " style={{textAlign: "justify"}}>
                <h3 className="text-center">Enterprise Solutions</h3>
              
                <p>At iTZ-ONE, we specialize in providing a wide range of enterprise software solutions designed to meet the diverse needs of businesses across various sectors. Our offerings include advanced systems for CRM, ERP, project management, business intelligence, and much more. Whether you're looking to enhance operational efficiency, streamline business processes, or improve customer engagement, iTZ-ONE has the right tools to help you achieve your goals. Our solutions are tailored to maximize productivity and ensure seamless integration with your existing infrastructure, enabling you to leverage technology for business success. Trust iTZ-ONE to empower your enterprise with the software solutions it needs to thrive in the competitive market landscape.The Enterprise Resource Planning (ERP) systems at iTZ-ONE integrate various functions into one complete system to streamline processes and information across the entire organization, facilitating easier and faster decision-making.</p>{" "}
                {/* Building on iTZ-ONE's commitment to innovation and quality, we also offer state-of-the-art data analytics and security services. These services are crafted to safeguard your enterprise's data and provide deep insights that drive informed strategic decisions. By harnessing the power of big data and robust cybersecurity measures, iTZ-ONE positions your business at the forefront of technological advancement, ensuring not only protection but also a competitive edge through intelligent analytics. Trust iTZ-ONE to be your partner in navigating the complexities of the digital landscape while securing your digital assets. */}
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="container container-product mt-5 section " id="server-management">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 content-animate" ref={refs.current[5]} style={{ textAlign: "justify" }}>
                <h3 className="text-center">Server Rack and Cable Managment</h3>
                <p>
                  Data centers today consist of rows of server racks and network
                  cabinets to support an abundance of data cables, power cords,
                  and network devices. Delivering proficient cable management
                  within a confined and tightly-spaced server rack is quite
                  difficult. However, cable management is no longer a nightmare
                  if you follow the right guide.<br/>
                     
Efficient cable management is essential for maintaining the performance and durability of your data center equipment. By implementing structured cabling standards, iTZ-ONE ensures optimal airflow and ease of access for maintenance and upgrades. 
<br/>Our innovative solutions minimize the risk of human error, reduce downtime, and enhance system reliability. 
 <br/>Trust us to streamline your cable management, paving the way for a more efficient and secure data environment.

                </p>
              </div>
              <div className="col-md-6 image-container image-animate" ref={refs.current[6]}>
                <img src={Hardware} alt="Laptop" className="image" style={{height:"300px"}}/>
                <img
                  src={cable4}
                  alt="Laptop"
                  className="image ipad-class mt-2"
                />
                {/* <img
                  src={Hardware}
                  alt="Laptop"
                  className="image ipad-class mt-5"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;