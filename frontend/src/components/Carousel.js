import React from 'react'
import './Carousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const imageList = [
    { src: "./img/Contributor.jpg", alt: "Image 3" },
    


    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div>
        <ul style={{  padding: "0", margin :"0" }}>{dots}</ul>
      </div>
    ),
  
  };
  
  return (
    <>
    <h1 className='yada' style={{textAlign:'center'}}>"Yada Yada hi dharmasya glanir bhavati bharata</h1>
    <h1 className='yada' style={{textAlign:'center'}}><span> Abhyutthanam adharmasya tadatmanam srjamy aham"</span></h1>
    <div className="Carousel" style={{margin:"0", padding:"0",backgroundAttachment:'fixed'}}>
    
<div style={{maxWidth: "700px", margin: "0 auto",marginTop: "50px",objectFit:"cover",backgroundColor:"#03071e"}}>
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} style={{ margin: "0 0px" }}>
            <div
              className="box"
              style={{
                margin:"50px",
                padding:0,
                height:'400px',
                maxWidth: "700px",
                background: "#758e4f",
                overflow: "hidden",
                color: "",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "80%",
                  height: "90%",
                  
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};


export default Carousel