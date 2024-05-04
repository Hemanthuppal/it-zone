import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/part3.jpg';
import cc2 from '../../img/part4.jpg';
import part1 from '../../img/parts.jpg';

function Banner() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'> 
           <Carousel>
               <Carousel.Item>
                   
                   <img 
                       src={image1} 
                       alt="Los Angeles" 
                       style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={part1} 
                       alt="Chicago" 
                       style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img 
                       src={cc2} 
                       alt="New york" 
                       style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                   />
               </Carousel.Item>
           </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner ;
