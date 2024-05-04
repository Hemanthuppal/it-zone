// Cards.js
import React, { useEffect, useState, useRef } from "react";
import "./Cards.css";
import cc3 from "../../img/cc3.jpg";
import data3 from "../../img/data3.webp";
import lap from "../../img/lap.jpg";
import cc2 from "../../img/cc2.jpg";

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
      <img src={cc3} alt="" className="service-img " />
        <h3>Our business areas</h3>
        <p>
          IT-Zone’s operations are organized into four global business areas,
          which in turn are made up of 21 divisions.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(1) ? "show" : ""}`}>
      <img src={data3} alt="" className="service-img" />
        <h3>Contact us</h3>
        <p>
        Get in touch with IT-Zone and find the right resources to help. Connect with us today to discover how we can help your requirement.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(2) ? "show" : ""}`}>
      <img src={lap} alt="" className="service-img" />
        <h3>Our purpose</h3>
        <p>
        We provide always our best services to our clients and always try to achieve our client's trust and satisfaction.
        </p>
      </div>
      <div className={`service-card ${showCards.includes(3) ? "show" : ""}`}>
      <img src={cc2} alt="" className="service-img" />
        <h3>Technology and innovation</h3>
        <p>
        IT-Zone spearheads transformative advancements spanning diverse industrial technologies, ensuring comprehensive value delivery.
          spectrum of technologies.
        </p>
      </div>
    </div>
  );
};

export default Cards;
