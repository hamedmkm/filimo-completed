import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
import Sliderimage1 from "./Image/1.jpeg";
import Sliderimage2 from "./Image/2.jpeg";
import Sliderimage3 from "./Image/3.jpeg";
import Sliderimage4 from "./Image/4.jpeg";
import Sliderimage5 from "./Image/5.jpeg";
import Sliderimage6 from "./Image/6.jpeg";
import Sliderimage7 from "./Image/7.jpeg";
import Sliderimage8 from "./Image/8.jpeg";
import Sliderimage9 from "./Image/9.jpeg";
import Sliderimage10 from "./Image/10.jpeg";
import Sliderimage11 from "./Image/11.jpeg";
import Sliderimage12 from "./Image/12.jpeg";
import Sliderimage13 from "./Image/13.jpeg";
import Sliderimage14 from "./Image/14.jpeg";
import Sliderimage15 from "./Image/15.jpeg";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",transform: "scale(1.5)", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",transform: "scale(1.5)", right: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const images = [
  Sliderimage1, Sliderimage2, Sliderimage3, Sliderimage4, Sliderimage5,
  Sliderimage6, Sliderimage7, Sliderimage8, Sliderimage9, Sliderimage10,
  Sliderimage11, Sliderimage12, Sliderimage13, Sliderimage14, Sliderimage15
];

const settings = {
  dots: false, // Disable dots
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false // Disable dots for responsive settings as well
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false // Disable dots for responsive settings as well
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false // Disable dots for responsive settings as well
      }
    }
  ]
};

const Sliderbar = () => {
  return (
    <>
   <div className=""> 
   <div className="text-right ">
  <h1 className="text-white text-xl font-bold pr-[4.3%] pt-10 ">محتواهای رایگان</h1>
</div>
    <div className="mt-6 opacity-75 ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2 mb-10">
            <a href="">
            <img
              className="d-block w-100 hover:brightness-150 line-photo1"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            </a>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Sliderbar;
