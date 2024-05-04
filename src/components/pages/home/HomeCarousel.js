import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/4.jpg';
import cc5 from '../../img/cc5.jpg';
import part1 from '../../img/part1.jpg';
import computer123 from '../../img/computer123.png';
import laptop from '../../img/laptop.jpg';
import computer1 from '../../img/computer1.jpg';
import applelaptop from '../../img/applelaptop.jpg'

function Banner() {
  return (
    <div className='carousel-container'>
      <div className='row'>
        <div className='col-12'> 
           <Carousel>
               <Carousel.Item>
                   
                   <img 
                       src={applelaptop} 
                       alt="Los Angeles" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={computer1} 
                       alt="Chicago" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={cc5} 
                       alt="New york" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={computer123} 
                       alt="New york" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={image1} 
                       alt="New york" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={part1} 
                       alt="New york" 
                       style={{ width: '100vw', height: '500px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
           </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner ;
