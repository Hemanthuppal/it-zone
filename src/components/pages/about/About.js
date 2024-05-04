import React from 'react';
import Cards from "./Cards";
import './About.css'; 


function About() {

  return (
    <div className='my-container'>
    <div className="about">
      {/* <h3 className='column_right h2'>ABOUT</h3> */}
      <div className="column_left ">
        <img src="https://static7.depositphotos.com/1008939/725/i/450/depositphotos_7259015-stock-photo-digital-art.jpg" alt="" className="about-img" />
      </div>
      <div className="column_right">
      <div className="red-dash"></div>
        <h3 style={{textAlign:"left"}}>About IT-Zone</h3>
        <h2>What We Offer, Services Given by Us</h2>
        <p>
        In the IT industry, our team decided to alter direction. 
        Now, we share our experiences to help others. 
        Our ramp up process is designed to empower your technical team or staff your company with the services they need to succeed.
        Ask us about the following services:  
        iT-ZONE offers rapid, cost-effective IT solutions to the business challenges faced by companies through its in-depth experience and knowledge, 
        technological expertise, and project management skills. iT-ZONE has earned an excellent reputation as a solution- oriented <span className='head'>organisation specialising </span>
        in assisting its clients in developing innovative strategies, the crafting of business effective technology solutions and the successful execution of
        highly complex projects. With over 10 years of combined proven industry experience and technology proficiency to draw on, 
        iT-ZONE can and does deliver significant incremental value to the realisation of our customer’s needs
        </p>
      </div>
      <div className='cards'>
      <Cards/>
      </div>
    </div>
    </div>
  );
}

export default About;