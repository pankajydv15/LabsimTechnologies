/* eslint-disable react/prop-types */
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic from "../../assets/Portfolio/Picture9.png";
import picture1 from "../../assets/Portfolio/Picture1.jpg";
import picture2 from "../../assets/Portfolio/Picture2.jpg";
import picture3 from "../../assets/Portfolio/Picture3.png";
import picture4 from "../../assets/Portfolio/Picture4.jpg";
import picture5 from "../../assets/Portfolio/Picture5.png";
import picture6 from "../../assets/Portfolio/Picture6.png";
import picture7 from "../../assets/Portfolio/Picture7.png";
import picture8 from "../../assets/Portfolio/Picture8.png";

// Custom Arrow Components
function CustomPrevArrow(props) { 
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{ ...style, display: "block", background: "#333", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{ ...style, display: "block", background: "#333", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,  // Custom Next Arrow
    prevArrow: <CustomPrevArrow />,  // Custom Prev Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Slide data, where you can add images
  const slideData = [
    { img: pic },
    { img: picture1 },
    { img: picture2 },
    { img: picture3 },
    { img: picture4 },
    { img: picture5 },
    { img: picture6 },
    { img: picture7 },
    { img: picture8 },
  ];

  return (
    <section className="bg-white dark:bg-custom-gradient transition-colors duration-300 py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl uppercase text-green-600 dark:text-green-400 font-bold">
            Our Portfolio
          </h3>
          <br />
          <span className="text-xl font-serif uppercase block dark:text-white">
            Labsim Technologies Pvt. Ltd providing services across India, Nepal & Bangladesh
          </span>
        </div>

        <div className="slider-container w-full">
          <Slider {...settings}>
            {slideData.map((slide, index) => (
              <div key={index} className="p-4">
                <img 
                  src={slide.img} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-[250px] object-cover rounded-lg"  // Fixed height and object-fit
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
