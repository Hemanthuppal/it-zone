// Cards.js
import React, { useEffect, useState, useRef } from "react";
import "./Cards.css";

const Cards = () => {
  const [showCards, setShowCards] = useState([]);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = Array.from(cardsRef.current.children);

    const handleScroll = () => {
      if (cardsRef.current) {
        const cardsTop = cardsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardsTop < windowHeight * 0.75) {
          cards.forEach((card, index) => {
            const timeout = setTimeout(() => {
              setShowCards((prev) => [...prev, index]);
            }, index * 300); // Adjust the delay between cards as needed

            return () => clearTimeout(timeout);
          });

          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="service-cards" ref={cardsRef}>
      <div className={`service-card ${showCards.includes(0) ? "show" : ""}`}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/975/273/non_2x/doctor-hold-icon-health-and-electronic-medical-record-on-interface-digital-healthcare-and-network-generative-ai-free-photo.jpg"
          alt=""
          className="service-img"
        />
        <h3>Our business areas</h3>
        <p>
          IT-Zone’s operations are organized into four global business areas,
          which in turn are made up of 21 divisions.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(1) ? "show" : ""}`}>
        <img
          src="https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.jpg?s=612x612&w=0&k=20&c=eYpphDeQI9uW4DnmQhAx7alQEIrQ7p6JlWfGTb80v-s="
          alt=""
          className="service-img"
        />
        <h3>Contact us</h3>
        <p>
        Have questions or need assistance? Contact us today for prompt and support tailored to your needs.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(2) ? "show" : ""}`}>
        <img
          src="https://media.istockphoto.com/id/671400334/photo/businessman-hand-demonstrating-digital-connection-lines.jpg?s=612x612&w=0&k=20&c=p83TweFy3SaOTRJL3nSuxqKe31gllzV5VWfii2X6Pmc="
          alt=""
          className="service-img"
        />
        <h3>Our purpose</h3>
        <p>
        iT-ZONE is a cutting-edge tech hub, fostering innovation and creativity in digital realms.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(3) ? "show" : ""}`}>
        <img
          src="https://s3.wns.com/S3_5/Images/GenericHeaderBanner/DesktopImg/19227/3120/Shared-Services_HD-1980x1080px.jpg"
          alt=""
          className="service-img"
        />
        <h3>Technology and innovation</h3>
        <p>
          IT-Zone delivers value by driving advances across wide
          spectrum of technologies.
        </p>
      </div>
    </div>
  );
};

export default Cards;
