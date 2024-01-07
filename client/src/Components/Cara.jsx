import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import './Cara.css'
const Cara = () =>
{
    var items = [
        {image: "/image/cara1.jpg"},
        {image: "/image/cara2.jpg"},
        {image: "/image/cara3.jpg"},
        {image: "/image/cara4.jpg"},
        {image: "/image/cara5.jpg"},
        {image: "/image/cara6.jpg"},
    ];
    

    return (
      <div className='caracon' >
        <Carousel
          indicatorContainerProps={{style:{display:"none"}}}
          navButtonsProps={{style:{marginTop:"-25vh", height:"200px",borderRadius:"10px"}}}
        >
            {
                items.map( (item, i) => 
                <div className="cont"  key={i}>
                  <img src={item.image} alt="image" />
                  <div className="grad"></div>
                </div> 
            )
          }
        </Carousel>
      </div>
    )
}




export default Cara
