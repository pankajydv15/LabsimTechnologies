import React from 'react';
import Slider from "react-slick";
import delhi from "../../assets/Clients/Delhi-Police-Logo.jpg";
import ashok from "../../assets/Clients/Ashok-Leyland-Emblem.jpg";
import bike from "../../assets/Clients/honda bike.jpg";
import honda from "../../assets/Clients/honda logo.jpg";
import iit from "../../assets/Clients/IIT Guwahati Logo.png";
import maruti from "../../assets/Clients/maruti  logo.png";
import tata from "../../assets/Clients/tata motors.jpg";

function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5, // Default number of slides for large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
        }
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
        }
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        }
      }
    ]
  };

  return (
    <section className="bg-white dark:bg-custom-gradient-reverse transition-colors duration-300 py-8 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-4xl uppercase text-green-600 dark:text-green-400 font-bold">
          Our Clients
        </h3>
      </div>

      <div className="w-full m-2 py-14 rounded-md">
        <Slider {...settings}>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={delhi} alt="Delhi Police Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={ashok} alt="Ashok Leyland Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={bike} alt="Honda Bike Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={honda} alt="Honda Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={iit} alt="IIT Guwahati Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={maruti} alt="Maruti Logo" className="object-contain w-full h-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
              <img src={tata} alt="Tata Motors Logo" className="object-contain w-full h-full" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
